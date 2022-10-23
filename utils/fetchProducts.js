export const fetchProducts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
    );

    const { products } = await res.json();

    return products;
};
