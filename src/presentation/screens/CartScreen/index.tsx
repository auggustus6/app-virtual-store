import React  from 'react';
import { useCart } from '@hooks/useCart';
import { ListView } from '@components/Listing/ListView';
import {
  Container,
  ContainerList,
} from './styles';
import { CardCart } from '@components/Card';
import { SeparatorItem } from '@components/Listing/SeparatorItem';
import CardTotalProduct from '@components/Card/CardTotalProduct';

const CartScreen: React.FC = () => {
  const { productList, totalProducts } = useCart();

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
      <CardTotalProduct total={totalProducts}/>
    </Container>
  )
}

export default CartScreen;