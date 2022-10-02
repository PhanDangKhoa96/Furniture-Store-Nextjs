// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {sanityClient} from "../../sanity";
import {groq} from "next-sanity";
const query = groq`*[_type == "category"]{
    _id, title, slug
    }`;

export default async function handler(req, res) {
    const categories = await sanityClient.fetch(query);
    res.status(200).json({categories});
}
