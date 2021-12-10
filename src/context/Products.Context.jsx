import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider(props) {
    const [products, setProducts] = useState([{ id: 1, name: 'Gimnasio 1' }, { id: 2, name: 'Gimnasio 2' }, { id: 3, name: 'Gimnasio 3' }, { id: 4, name: 'Gimnasio 4' }, { id: 5, name: 'Gimnasio 5' }]);

    const remove = (product) => {
        setProducts(products.filter(p => p.id !== product.id));
    }

    return (
        <ProductsContext.Provider value={{ products, setProducts, remove }}>
            {props.children}
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
}

