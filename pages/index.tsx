import { InferGetServerSidePropsType } from 'next';
import getAllProductes from '../framework/shopify/product/getAllProducts';

export async function getStaticProps () {
  const products = await getAllProductes();
  return {
    props: {
      products
    },
    revalidate : 4 * 60 *60
  }
}
export default function Home({ products }: InferGetServerSidePropsType<typeof getStaticProps>) {

  return (
    <div>
      {products}
    </div>
  )
}
