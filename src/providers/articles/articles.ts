import gql from 'graphql-tag';
import type { ArticlesQuery } from '~/generated/graphql';
import { execute } from '~/utils/api';

export const getArticles =  async () => {
	const response =  await execute<ArticlesQuery>( `query articles {
        allArticles {
        title
        }
    }`)
    return response;
}



gql` query articles {
    allArticles {
        title
    }
}`;