import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import qs from 'querystring';

const ALIPAY_APP_ID = process.env.ALIPAY_APP_ID || '';
const ALIPAY_APP_PRIVATE_KEY = process.env.ALIPAY_APP_PRIVATE_KEY || '';
const ALIPAY_REDIRECT_URI = process.env.ALIPAY_REDIRECT_URI || '';

function generateSignature(params: Record<string, string>): string {
  const signString = qs.stringify(params);
  const sign = crypto
    .createSign('RSA-SHA256')
    .update(signString)
    .sign(ALIPAY_APP_PRIVATE_KEY, 'base64');
  return sign;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('auth_code');
    
    if (!code) {
      const timestamp = new Date().toISOString();
      const state = crypto.randomBytes(16).toString('hex');
      
      const params: Record<string, string> = {
        app_id: ALIPAY_APP_ID,
        method: 'alipay.system.oauth.token',
        format: 'JSON',
        charset: 'utf-8',
        sign_type: 'RSA2',
        timestamp,
        version: '1.0',
        grant_type: 'authorization_code',
        code: code || '',
        redirect_uri: ALIPAY_REDIRECT_URI,
        state
      };

      params.sign = generateSignature(params);
      
      const authUrl = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?${qs.stringify({
        app_id: ALIPAY_APP_ID,
        scope: 'auth_user',
        redirect_uri: ALIPAY_REDIRECT_URI,
        state
      })}`;
      
      return NextResponse.json({ authUrl });
    }

    const tokenParams: Record<string, string> = {
      app_id: ALIPAY_APP_ID,
      method: 'alipay.system.oauth.token',
      format: 'JSON',
      charset: 'utf-8',
      sign_type: 'RSA2',
      timestamp: new Date().toISOString(),
      version: '1.0',
      grant_type: 'authorization_code',
      code: code
    };
    tokenParams.sign = generateSignature(tokenParams);

    const tokenUrl = `https://openapi.alipay.com/gateway.do?${qs.stringify(tokenParams)}`;
    const tokenResponse = await fetch(tokenUrl);
    const tokenData = await tokenResponse.json();

    if (tokenData.error_response) {
      return NextResponse.json(
        { error: '获取access_token失败', details: tokenData.error_response },
        { status: 400 }
      );
    }

    const tokenResult = tokenData.alipay_system_oauth_token_response;
    const userParams: Record<string, string> = {
      app_id: ALIPAY_APP_ID,
      method: 'alipay.user.info.share',
      format: 'JSON',
      charset: 'utf-8',
      sign_type: 'RSA2',
      timestamp: new Date().toISOString(),
      version: '1.0',
      auth_token: tokenResult.access_token
    };
    userParams.sign = generateSignature(userParams);

    const userUrl = `https://openapi.alipay.com/gateway.do?${qs.stringify(userParams)}`;
    const userResponse = await fetch(userUrl);
    const userData = await userResponse.json();

    if (userData.error_response) {
      return NextResponse.json(
        { error: '获取用户信息失败', details: userData.error_response },
        { status: 400 }
      );
    }

    const userInfo = userData.alipay_user_info_share_response;

    return NextResponse.json({
      userId: tokenResult.user_id,
      avatar: userInfo.avatar,
      nickname: userInfo.nick_name,
      accessToken: tokenResult.access_token,
      refreshToken: tokenResult.refresh_token
    });
  } catch (error) {
    console.error('Alipay auth error:', error);
    return NextResponse.json(
      { error: '支付宝授权失败' },
      { status: 500 }
    );
  }
}
