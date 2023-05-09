import gql from 'graphql-tag';
import { execute } from '~/utils/api';

export const getArticles = async () => {
	return await execute('POST', `query articles {
        allArticles {
        title
        }
    }`);
};

gql` query articles {
    allArticles {
        title
    }
}`;