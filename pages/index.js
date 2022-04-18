import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Spent so much time coding, and not even time practicing how to smile</p>
        <p>
          Working on this blog site. Stay tune
        </p>
      </section>
    </Layout>
  )
}
