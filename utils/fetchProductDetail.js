import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchProductDetail = async (slug) => {
    const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id, ...
    }`;
    const product = await sanityClient.fetch(query, { slug });

    return product;
};
