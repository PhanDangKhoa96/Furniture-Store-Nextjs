// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';
const query = groq`*[_type == "news"]{
    _id, ...
    }`;

export default async function handler(req, res) {
    const news = await sanityClient.fetch(query);
    res.status(200).json({ news });
}
