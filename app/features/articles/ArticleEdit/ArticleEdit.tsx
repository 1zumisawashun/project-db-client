'use client'

import styles from '@/components/layouts/SiteWrapper/index.module.scss'
import { Footer } from '@/components/layouts/Footer'
import { Schema } from './articleEdit.schema'
import { ArticleEditForm } from './components/ArticleEditForm'
import { ArticleEditHeader } from './components/ArticleEditHeader'
import { ArticleEditProvider } from './components/ArticleEditProvider'

const BLOCK_NAME = 'site-wrapper'
type Props = {
  articleId: string
  defaultValues: Schema
  categoryOptions: string[]
}
export const ArticleEdit: React.FC<Props> = ({
  articleId,
  defaultValues,
  categoryOptions,
}) => {
  return (
    <ArticleEditProvider defaultValues={defaultValues}>
      <div className={styles[`${BLOCK_NAME}`]}>
        <ArticleEditHeader articleId={articleId} />
        <main className={styles[`${BLOCK_NAME}-inner`]}>
          <ArticleEditForm categoryOptions={categoryOptions} />
        </main>
        <Footer />
      </div>
    </ArticleEditProvider>
  )
}
