import React from 'react';
import BlogCard from './BlogCard';

const blogData = [
    {
        id: 1,
        src: 'https://static.wixstatic.com/media/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg/v1/fill/w_300,h_400,fp_0.50_0.50,q_90,enc_auto/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg',
        title: 'Minimal Home',
        slug: 'minimal-home'
    },
    {
        id: 2,
        src: 'https://static.wixstatic.com/media/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg/v1/fill/w_300,h_400,fp_0.50_0.50,q_90,enc_auto/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg',
        title: 'Office Space',
        slug: 'office-space'
    },
    {
        id: 2,
        src: 'https://static.wixstatic.com/media/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg/v1/fill/w_300,h_400,fp_0.50_0.50,q_90,enc_auto/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg',
        title: 'Office Space',
        slug: 'office-space'
    },
    {
        id: 2,
        src: 'https://static.wixstatic.com/media/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg/v1/fill/w_300,h_400,fp_0.50_0.50,q_90,enc_auto/nsplsh_34344f61574d5f4f62576b~mv2_d_3805_5707_s_4_2.jpg',
        title: 'Office Space',
        slug: 'office-space'
    }
];

const BlogListing = ({ news }) => {

    return (
        <section className="section">
            <div className="container">
                <h3 className="mb-7 md:mb-10 text-center text-dark-vanilla">
                    Latest News
                </h3>

                {news.length > 0 ? (
                    <div className="grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-5 md:gap-y-24">
                        {news.map((blog) => {
                            return <BlogCard {...blog} key={blog._id} />;
                        })}
                    </div>
                ) : (
                    <div>no data</div>
                )}
            </div>
        </section>
    );
};

export default BlogListing;
