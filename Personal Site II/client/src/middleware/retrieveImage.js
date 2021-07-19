const retrieveImage = path => {
    try {
        return require(`../img/${path}`);
    } catch (err) {
        console.error(err);
        return require('../img/github/default.jpg');
    }
};

export default retrieveImage;
