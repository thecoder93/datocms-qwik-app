import gql from 'graphql-tag';
import type { Product } from '~/generated/graphql';
import { execute } from '~/utils/api';


export const getAllProducts =  async () => {
	const response =  await execute<Product>( `query products {
    allProducts {
      id
      name
      image {
        url
      }
      _status
      _firstPublishedAt
    }
  
    _allProductsMeta {
      count
    }
}`)
    return response;
}



gql` {
    allProducts {
      id
      name
      _status
      _firstPublishedAt
    }
  
    _allProductsMeta {
      count
    }
  }`;