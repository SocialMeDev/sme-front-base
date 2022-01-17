const Auth = {
  BrowserToken: {
    Set: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/browser/login',
      method: 'get',
      timeout: '50000',
    },
    Check: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/browser/is-auth',
      method: 'get',
      timeout: '50000',
    },
  },
  UserToken: {
    Check: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/is-auth',
      method: 'get',
      timeout: '50000',
    },
  },
  Users: {
    Get: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/auth-info',
      method: 'get',
      timeout: 50000,
    },
  },
  User: {
    PreLogin: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/pre-login',
      method: 'post',
      timeout: 50000,
    },
    Login: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/login',
      method: 'post',
      timeout: '50000',
    },
    Logout: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/logout',
      method: 'delete',
      timeout: '50000',
    },
  },
  RecoveryPassword: {
    Contact: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/forgot-password',
      method: 'post',
      timeout: 50000,
    },
    ChangePassword: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/forgot-password/token/tokenId/personId',
      method: 'post',
      timeout: 50000,
    },
    CheckToken: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/forgot-password/token/tokenId/personId',
      method: 'get',
      timeout: 50000,
    },
    CancelToken: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/auth/person/forgot-password/token/tokenId/personId',
      method: 'delete',
      timeout: 50000,
    },
  },
  Register: {
    PF: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/account/person/register/pf',
      method: 'post',
      timeout: 50000,
    },
    PJ: {
      baseURL: process.env.NEXT_PUBLIC_SOCIALME_AUTH_API,
      url: '/account/person/register/pj',
      method: 'post',
      timeout: 50000,
    },
  },
}

export default Auth
