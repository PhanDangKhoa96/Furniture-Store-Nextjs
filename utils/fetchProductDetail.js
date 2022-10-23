export const fetchProductDetail = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProductDetail?slug=${slug}`
    );

    const { product } = await res.json();

    console.log(product);

    return product;
};
