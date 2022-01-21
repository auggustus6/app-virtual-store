import React from "react";
import api from "src/infrastructure/api";

export type ProductItemProps = {
    id: string;
    createdAt: string;
    name: string;
    price: number;
    image: string;
    stock: number;
}

type ProductContextProps = {
    products: ProductItemProps[];
    loading: boolean;
    loadProducts: () => Promise<void>;
}

type ProductContextProviderProps = {
    children: React.ReactNode
}

const ProductContext = React.createContext<ProductContextProps>({} as ProductContextProps);

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {

    const [products, setProducts] = React.useState<ProductItemProps[]>([]);

    const [loading, setLoading] = React.useState<boolean>(false);

    const loadProducts = async () => {
        setLoading(true);

        try {
            const response = await api.get('/product');
            setProducts(response.data);
            setLoading(false);

        } catch (err) {
            throw new Error(JSON.stringify(err));
        } finally {
            setLoading(false);
        }
    }

    const valuesProvider = {
        products,
        loading,
        loadProducts
    }

    return (
        <ProductContext.Provider
            value={valuesProvider}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => {
    const context = React.useContext(ProductContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductContextProvider');
    }
    return context;
}

export {
    ProductContextProvider,
    useProduct
}



