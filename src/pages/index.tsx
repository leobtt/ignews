import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ínicio | Ig.news</title>
    </Head>
    <main className={styles.containerHome}>
      <section className={styles.hero}>
        <span>👏 Seja Bem-vindo </span>
        <h1>
          Novidades sobre o ecossistema
          <span> React</span>
          
        </h1>
        <p>
          Tenha acesso a todas as publicações
        </p>
        <span>por R$ 9,90 por mês</span>
        <SubscribeButton/>
      </section>
      <img src="/images/avatar.svg" alt="Garota codando" />
    </main>
    </>
  )
}
