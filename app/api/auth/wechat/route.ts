import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const WECHAT_APP_ID = process.env.WECHAT_APP_ID || '';
const WECHAT_APP_SECRET = process.env.WECHAT_APP_SECRET || '';
const WECHAT_REDIRECT_URI = process.env.WECHAT_REDIRECT_URI || '';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const state = searchParams.get('state') || '';
    const code = searchParams.get('code');
    
    if (!code) {
      const redirectUri = encodeURIComponent(WECHAT_REDIRECT_URI);
      const scope = 'snsapi_login';
      const stateParam = crypto.randomBytes(16).toString('hex');
      
      const authUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=${WECHAT_APP_ID}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${stateParam}#wechat_redirect`;
      
      return NextResponse.json({ authUrl });
    }

    const tokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${WECHAT_APP_ID}&secret=${WECHAT_APP_SECRET}&code=${code}&grant_type=authorization_code`;
    
    const tokenResponse = await fetch(tokenUrl);
    const tokenData = await tokenResponse.json();
    
    if (tokenData.errcode) {
      return NextResponse.json(
        { error: '获取access_token失败', details: tokenData },
        { status: 400 }
      );
    }

    const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${tokenData.access_token}&openid=${tokenData.openid}`;
    const userResponse = await fetch(userInfoUrl);
    const userInfo = await userResponse.json();

    return NextResponse.json({
      openid: tokenData.openid,
      unionid: userInfo.unionid,
      nickname: userInfo.nickname,
      avatar: userInfo.headimgurl,
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token
    });
  } catch (error) {
    console.error('WeChat auth error:', error);
    return NextResponse.json(
      { error: '微信授权失败' },
      { status: 500 }
    );
  }
}
