import Head from 'next/head'
import { GetStaticProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/home.module.scss'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({product}: HomeProps) {
  
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
        <span>por {product.amount} por mês</span>
        <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/avatar.svg" alt="Garota codando" />
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async()=>{
  const price = await stripe.prices.retrieve('price_1KnCdVJIgb0xjgpY5O5IEemG')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL', 
    }).format((price.unit_amount / 100)), // ele vem em centavos
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 horas
    // quanto tempo em segundos eu quero que essa página não seja revalidada
  }
}