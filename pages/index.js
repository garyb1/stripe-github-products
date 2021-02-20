import Head from 'next/head'
import NextLink from 'next/link';
import styles from '../styles/Home.module.css'

import combineProducts from '../lib/combineProducts';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
          {
          Object.values(products).map(product => {
            const { id, name, description } = product;
            return (
              <li key={id}>
                <NextLink href={`/products/${id}`}>
                  <a>
                    {/* <img src={image} alt={title} /> */}
                    <h3>{ name }</h3>
                    <p>{ description }</p>
                  </a>
                </NextLink>
                <p>
                  <button>
                    Buy
                  </button>
                </p>
              </li>
            )
          })}
        </ul>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      products: await combineProducts()
    }
  }
}