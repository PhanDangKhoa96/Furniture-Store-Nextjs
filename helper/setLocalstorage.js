const setLocalstorage = (arr) => {
    return localStorage.setItem('myCart', JSON.stringify(arr));
};

export default setLocalstorage;
