import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getArticles } from '~/providers/articles/articles';


export const useArticles = routeLoader$(async()  => { return await getArticles()}) 

export default component$(() => {
  const articlesSignal = useArticles();
  
  console.log('articlesSignal', articlesSignal.value);
  return (
    <>
    <div>
      {JSON.stringify(articlesSignal.value.allArticles)}
      </div>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>
    </>
  );
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
