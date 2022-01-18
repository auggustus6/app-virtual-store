import React, { useEffect } from 'react';
import { ListView } from '@components/Listing/ListView/ListView';
import { useProduct } from '@hooks/useProducts';
import { Card } from '@components/Card';
import {
  Wrapper
} from './styles';

const ProductScreen: React.FC = () => {
  const { loadProducts, products, loading } = useProduct();
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ListView
      data={products}
      refreshing={loading}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
      renderItem={({ item }) => (
        <Wrapper>
          <Card title={item.name} price={item.price} />
        </Wrapper>
      )}
    />
  );
}

export default ProductScreen;