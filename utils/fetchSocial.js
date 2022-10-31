export const fetchSocial = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`
    );

    const { social } = await res.json();

    return social;
};
