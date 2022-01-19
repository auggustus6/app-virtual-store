import React, { useEffect } from "react";
import { ProductItemProps } from "./useProducts";


type ProductListProps = ProductItemProps & {
    quantity: number;
}

type CartContextProps = {
    productList: ProductListProps[]
    loading: boolean;
    addProduct: (product: ProductItemProps) => void;
    removeProduct: (idProduct: string) => void;
    handleDecrement: (idProduct: string) => void;
    handleIncrement: (idProduct: string) => void;
}

type CartContextProviderProps = {
    children: React.ReactNode
}

const CartContext = React.createContext<CartContextProps>({} as CartContextProps);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [productList, setProductList] = React.useState<ProductListProps[]>([]);

    const handleDecrement = (idProduct: string) => {
        const newProductList = productList.map(item => {
            if (item.id === idProduct) return { ...item, quantity: item.quantity - 1 };
            return item;
        });
        setProductList(newProductList);
    }

    const handleIncrement = (idProduct: string) => {
        const newProductList = productList.map(item => {
            if (item.id === idProduct) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        })
        setProductList(newProductList);
    }

    const addProduct = (product: ProductItemProps) => {
        setLoading(true);
        const newProduct = productList.find(p => p.id === product.id);

        if (newProduct) {
            newProduct.quantity += 1;
            setProductList(productList => productList.map(item => item.id === product.id ? newProduct : item));
        } else {
            setProductList([...productList, { ...product, quantity: 1 }])
        }
        setLoading(false);
    }

    const removeProduct = (idProduct: string) => {
        setLoading(true);
        setProductList(productList.filter(item => item.id !== idProduct));
        setLoading(false);
    }

    const valuesProvider = {
        productList,
        addProduct,
        removeProduct,
        loading,
        handleDecrement,
        handleIncrement
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



