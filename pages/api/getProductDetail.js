// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';

const query = groq`*[_type == "product" && slug.current == ${slug}]{
    _id, ...
    }`;

export default async function handler(req, res) {
    const product = await sanityClient.fetch(query, { slug });
    res.status(200).json({ product });
}
