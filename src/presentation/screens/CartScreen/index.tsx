import React from 'react';
import { useCart } from '@hooks/useCart';
import { Text, View } from 'react-native';


const CartScreen: React.FC = () => {
  const { productList } = useCart();
  return (
    <View>
      {productList.map(product => (
        <>
        <Text>{product.name}</Text>
        <Text>{product.quantity}</Text>
        </>
      ))}
    </View>
  )
}

export default CartScreen;