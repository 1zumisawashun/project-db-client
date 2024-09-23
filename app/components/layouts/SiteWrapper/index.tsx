import { Header } from '../../elements/Header'
import { Footer } from '../../elements/Footer'
import styles from './index.module.scss'

const BLOCK_NAME = 'site-wrapper'

// NOTE: RSCに依存しているためカタログに追加できない

/** @see https://twitter.com/tak_dcxi/status/1471627450106974215 */
export const SiteWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles[`${BLOCK_NAME}`]}>
      <Header />
      <main className={styles[`${BLOCK_NAME}-inner`]}>{children}</main>
      <Footer />
    </div>
  )
}
