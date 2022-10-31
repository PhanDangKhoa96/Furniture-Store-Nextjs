export const fetchNews = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getNews`);

    const { news } = await res.json();

    return news;
};
