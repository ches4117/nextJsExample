import Head from 'next/head'
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Section = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </Section>
    </Layout>
  )
}