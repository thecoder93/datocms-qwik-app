import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getAllProducts } from '~/providers/articles/products';


export const useArticles = routeLoader$(async()  => { return await getAllProducts()}) 

export default component$(() => {
  const productSignal = useArticles();
  
  return (
    <>
      {productSignal.value.allProducts.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.id}</p>
        </div>
      ))}
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>
    </>  );
});

export const head: DocumentHead = {
  title: 'Welcome to DatoCMS Qwik',
  meta: [
    {
      name: 'description',
      content: 'DatoCMS Qwik site description',
    },
  ],
};
