# 微信 & 支付宝登录集成指南

## 📋 概述

本系统已支持微信和支付宝第三方登录功能。用户可以通过微信或支付宝账号快速登录，无需注册新账号。

### ✨ 功能特点

- **微信登录**：支持扫码登录，获取用户基本信息
- **支付宝登录**：支持授权登录，获取用户 ID 和昵称
- **自动注册**：首次登录时自动创建用户账号
- **新用户优惠**：首次登录赠送 100 积分

## 🔧 配置步骤

### 1. 微信登录配置

#### 1.1 注册微信开放平台账号

1. 访问 [微信开放平台](https://open.weixin.qq.com)
2. 注册开发者账号并完成认证
3. 创建网站应用，获取 AppID 和 AppSecret

#### 1.2 配置授权回调域

1. 在开放平台的应用设置中
2. 设置授权回调域为你的网站域名
3. 例如：`your-domain.com`

#### 1.3 设置环境变量

在 `.env.local` (开发环境) 或 Vercel 环境变量中添加：

```env
WECHAT_APP_ID=你的微信AppID
WECHAT_APP_SECRET=你的微信AppSecret
WECHAT_REDIRECT_URI=http://localhost:3000/api/auth/wechat/callback
```

### 2. 支付宝登录配置

#### 2.1 注册支付宝开放平台账号

1. 访问 [支付宝开放平台](https://open.alipay.com)
2. 创建应用并完成认证
3. 获取 AppID 和应用私钥

#### 2.2 配置 RSA2 密钥

1. 使用支付宝密钥工具生成 RSA2 密钥对
2. 将应用私钥 (RSA_PRIVATE_KEY) 配置到环境变量
3. 将支付宝公钥 (ALIPAY_PUBLIC_KEY) 配置到环境变量

#### 2.3 设置环境变量

```env
ALIPAY_APP_ID=你的支付宝AppID
ALIPAY_APP_PRIVATE_KEY=你的应用私钥(RSA2)
ALIPAY_ALIPAY_PUBLIC_KEY=支付宝公钥
ALIPAY_REDIRECT_URI=http://localhost:3000/api/auth/alipay/callback
```

### 3. Vercel 生产环境配置

在 Vercel 项目设置中添加以下环境变量：

```
WECHAT_APP_ID
WECHAT_APP_SECRET
WECHAT_REDIRECT_URI=https://你的域名/api/auth/wechat/callback

ALIPAY_APP_ID
ALIPAY_APP_PRIVATE_KEY
ALIPAY_ALIPAY_PUBLIC_KEY
ALIPAY_REDIRECT_URI=https://你的域名/api/auth/alipay/callback
```

## 🚀 使用方法

### 前端集成

在登录页面中引入第三方登录组件：

```tsx
import ThirdPartyLogin from '@/components/ThirdPartyLogin';

function LoginPage() {
  const handleSuccess = (token: string, user: any) => {
    // 保存 token
    localStorage.setItem('token', token);
    // 跳转或其他操作
    router.push('/dashboard');
  };

  const handleError = (error: string) => {
    console.error('登录失败:', error);
  };

  return (
    <div>
      <h1>登录</h1>
      <ThirdPartyLogin 
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
}
```

### API 接口

#### 微信登录

**获取授权 URL**
```
GET /api/auth/wechat
```

**回调处理**
```
POST /api/auth/wechat/callback
Content-Type: application/json

{
  "openid": "微信用户的openid",
  "nickname": "用户昵称",
  "avatar": "头像URL"
}
```

#### 支付宝登录

**获取授权 URL**
```
GET /api/auth/alipay
```

**回调处理**
```
POST /api/auth/alipay/callback
Content-Type: application/json

{
  "userId": "支付宝用户ID",
  "nickname": "用户昵称",
  "avatar": "头像URL"
}
```

## 📊 数据库更新

已添加两个新字段到 `users` 表：

```sql
ALTER TABLE users ADD COLUMN wechat_open_id VARCHAR UNIQUE;
ALTER TABLE users ADD COLUMN alipay_id VARCHAR UNIQUE;
```

### Prisma Schema 更新

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String?  @unique
  phone     String?  @unique
  password  String?
  avatar    String?
  language  String   @default("zh-CN")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  wechatOpenId  String?  @unique
  alipayId      String?  @unique
  
  // ... 其他字段
}
```

## 🔐 安全说明

### 1. 数据安全

- 第三方登录仅获取用户基本信息
- 不存储第三方登录凭证（access_token）
- 使用 JWT 进行身份验证

### 2. 隐私保护

- 用户可选择绑定手机号或邮箱，完善个人信息
- 头像昵称可随时修改
- 支持删除账户（关联数据一并删除）

### 3. 最佳实践

- 生产环境务必使用 HTTPS
- 定期更新第三方平台的 AppSecret
- 监控异常登录行为

## ⚠️ 注意事项

### 微信登录

1. **必须完成开发者认证**才能使用登录功能
2. **网站域名**必须在微信开放平台备案并验证
3. **scope** 使用 `snsapi_login`，获取用户基本信息

### 支付宝登录

1. **必须使用 RSA2 加密**签名
2. **应用私钥**必须妥善保管，切勿泄露
3. **支付宝公钥**从开放平台获取

## 🐛 故障排查

### 微信登录失败

1. 检查 AppID 和 AppSecret 是否正确
2. 确认授权回调域已配置
3. 检查网络连接是否正常
4. 查看浏览器控制台错误信息

### 支付宝登录失败

1. 检查 AppID 是否正确
2. 验证 RSA 密钥是否匹配
3. 确认支付宝应用已开通登录功能
4. 检查签名算法是否为 RSA2

### 数据库错误

1. 确保数据库已更新 schema
2. 检查 `wechat_open_id` 和 `alipay_id` 字段是否存在
3. 运行 `npx prisma db push` 同步 schema

## 📞 技术支持

如遇到问题：

1. 查看 Vercel 部署日志
2. 检查环境变量配置
3. 确认第三方平台应用状态
4. 查看数据库连接状态

## 🎯 后续优化建议

1. **绑定手机号**：允许用户绑定手机号，完善账户
2. **账户合并**：支持同一用户绑定多个第三方账号
3. **社交登录**：可扩展支持 Google、GitHub 等国际平台
4. **登录日志**：记录登录历史，便于安全审计

---

**准备开始使用了吗？**

1. ✅ 配置微信开放平台应用
2. ✅ 配置支付宝开放平台应用
3. ✅ 填写环境变量
4. ✅ 重新部署应用
5. ✅ 测试登录功能
