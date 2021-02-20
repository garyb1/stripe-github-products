  
import Head from 'next/head'
import combineProducts from '../../lib/combineProducts';

export default function Product({ product }) {

  const { id, title, price, description } = product;

  return (
    <div >
      <Head>
        <title>{ title } - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div>
          <h1>
            { title }
          </h1>

          <p >
            { description }
          </p>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo"/>
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps({ params = {} }) {
const products = await combineProducts();
  const product = Object.values(products).find(({ id }) => `${id}` === `${params.productId}`);
  return {
    props: {
      product
    },
  };
}

export async function getStaticPaths() {
    const products = await combineProducts();
  const paths = Object.values(products).map((product) => {
    const { id } = product;
    return {
      params: {
        productId: id,
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}