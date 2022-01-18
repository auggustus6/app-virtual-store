import React, { useEffect } from 'react';
import { ListView } from '@components/Listing/ListView/ListView';
import { CardProduct } from '@components/Card';
import {
  Wrapper
} from './styles';
import { useProduct } from '@hooks/useProducts';
import { useCart } from '@hooks/useCart';
import { useNavigation } from '@react-navigation/native';

const ProductScreen: React.FC = () => {
  const { loadProducts, products, loading } = useProduct();
  const { addProduct } = useCart();
  const { navigate } = useNavigation();
  useEffect(() => {
    loadProducts();
  }, []);

  const handleSelectProduct = (product: any) => {
    addProduct(product);
    navigate('Cart' as never);
  }

  return (
    <ListView
      data={products}
      refreshing={loading}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
      renderItem={({ item }) => (
        <Wrapper onPress={() => handleSelectProduct(item)}>
          <CardProduct title={item.name} price={item.price} />
        </Wrapper>
      )}
    />
  );
}

export default ProductScreen;