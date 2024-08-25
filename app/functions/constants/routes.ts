/**
 * 後で修正する
 */
export const routes = [
  { href: '/tos', label: '利用規約' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sign-in', label: 'ログイン' },
  { href: '/sign-up', label: '新規登録' },
  { href: '/articles', label: '記事一覧' },
  { href: '/articles/create', label: '記事作成' },
  { href: '/my-page', label: 'マイページ' },
]

/**
 * 認証が必要ないルートの配列(これらのルートは認証を必要としません)
 */
export const publicRoutes: string[] = ['/', '/faq', '/tos', '/new-verification']

/**
 * 認証に使用されるルートの配列
 */
export const authRoutes: string[] = [
  '/sign-up',
  '/sign-in',
  '/auth/new-password',
  '/reset-password',
  '/new-password',
]

/**
 * API認証ルートのプレフィックス
 */
export const apiAuthPrefix: string = '/api/auth'

/**
 * ログイン後のデフォルトリダイレクトパス
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/'
