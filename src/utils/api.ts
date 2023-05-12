import { server$ } from "@builder.io/qwik-city";
import { isBrowser } from '@builder.io/qwik/build';


type Options = {method: string, headers: Record<string, string>; body: string };


const request = async(url: string, options: Options) => {
  try {
    const response = await fetch(`${url}`, {
      method: options.method,
      headers: options.headers,
      body: options.body,

    });

    if (response.status >= 200 && response.status < 300) {
      const res = await response.json();
      return res.data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (ex) {
    const error = ex instanceof Error ? ex : new Error('Unknown error on request ' + url);
    return Promise.reject(error);
  }
};

const executeOnTheServer = server$(async (options: Options) => {
  return request('https://graphql.datocms.com/', options); //TODO Change to the real URL
});

export const execute = async<T>( query: string): Promise<T> => {
    const options: Options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_DATOCMS_API_TOKEN}`
        },
        body: JSON.stringify({ query })
    }
     //TODO Change to the real URL
  const response: T = isBrowser ? await request('https://graphql.datocms.com/', options) : await executeOnTheServer(options);

  return response;
};

