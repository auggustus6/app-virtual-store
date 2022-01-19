import React, { useCallback } from 'react';
import { useCart } from '@hooks/useCart';
import { ListView } from '@components/Listing/ListView/ListView';
import {
  Container,
  ContainerList,
} from './styles';
import { CardCart } from '@components/Card';
import { SeparatorItem } from '@components/Listing/SeparatorItem';

const CartScreen: React.FC = () => {
  const { productList } = useCart();

  const renderProduct = ({ item }: any) => {
    return (
      <CardCart
        id={item.id}
        title={item.name}
        price={item.price}
        uriProduct={item.image}
        quantity={item.quantity}
      />
    )
  }

  return (
    <Container>
      <ContainerList>
        <ListView
          data={productList}
          renderItem={renderProduct}
          keyExtractor={(item: any) => String(item.id)}
          ItemSeparatorComponent={() => <SeparatorItem />}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical:10 }}
        />
      </ContainerList>
    </Container>
  )
}

export default CartScreen;