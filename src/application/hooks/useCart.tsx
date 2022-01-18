import React from "react";
import { ProductItemProps } from "./useProducts";


type ProductListProps = ProductItemProps & {
    quantity: number;
}

type CartContextProps = {
    productList: ProductListProps[]
    loading: boolean;
    addProduct: (product: ProductItemProps) => void;
}

type CartContextProviderProps = {
    children: React.ReactNode
}

const CartContext = React.createContext<CartContextProps>({} as CartContextProps);

const CartContextProvider = ({ children }: CartContextProviderProps) => {


    const [loading, setLoading] = React.useState<boolean>(false);

    const [productList, setProductList] = React.useState<ProductListProps[]>([]);

    const addProduct = (product: ProductItemProps) => {
        setLoading(true);
        const newProduct = productList.find(p => p.id === product.id);

        if (newProduct) {
            newProduct.quantity += 1;
            setProductList([...productList, newProduct]);
        } else {
            setProductList([...productList, { ...product, quantity: 1 }])
        }
        setLoading(false);
    }

    const valuesProvider = {
        productList,
        addProduct,
        loading,
    }

    return (
        <CartContext.Provider
            value={valuesProvider}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartContextProvicer');
    }
    return context;
}

export {
    CartContextProvider,
    useCart
}



