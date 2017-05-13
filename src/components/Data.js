/**
 * Created by Shannon on 2017-05-13.
 */

const divStyle = {
    fontFamily: "Arial Rounded MT Bold",
    textShadow: "5px 2px 1px white",
    fontSize: 20
};

const animalAgeFactors = {
    "cat": 3.2,
    "dog": 3.64,
    "guinea pig": 10,
    "hamster": 20,
    "rabbit": 8.89,
    "parakeet": 4.44,
    "mouse": 20,
    "rat": 26.67,
    "pig": 3.2,
    "goat": 5.33
};

const images = {
    "cat": "https://emojipedia-us.s3.amazonaws.com/cache/9c/79/9c79a7e5314ed7ec73a0e6a68dcae890.png",
    "dog": "https://emojipedia-us.s3.amazonaws.com/cache/de/47/de47a2492a0d11ba10b89b2e58c8d204.png",
    "guinea pig": "https://emojipedia-us.s3.amazonaws.com/cache/77/55/7755f35767b1c557fb73fe3a9f37ee68.png",
    "hamster": "https://emojipedia-us.s3.amazonaws.com/cache/83/0a/830a3693af3fd9e71445763911a4b38a.png",
    "rabbit": "https://emojipedia-us.s3.amazonaws.com/cache/09/cc/09ccb00ae4e3a165d495bb49166f85aa.png",
    "parakeet": "https://emojipedia-us.s3.amazonaws.com/cache/ef/1a/ef1a31fe962387bf31d9329b76925aaf.png",
    "mouse": "https://emojipedia-us.s3.amazonaws.com/cache/4b/fd/4bfd7525f4a861740f05780a0603f2ef.png",
    "rat": "https://emojipedia-us.s3.amazonaws.com/cache/69/39/69391751f2233a93722c98a69033b2f9.png",
    "pig": "https://emojipedia-us.s3.amazonaws.com/cache/fb/f4/fbf44ab6a34b7103dd9807453c2cb35e.png",
    "goat": "https://emojipedia-us.s3.amazonaws.com/cache/ea/dc/eadc5b1b44ba35f12b8b6d9a9e77ee5c.png"

};

module.exports = {animalAgeFactors: animalAgeFactors, images: images, divStyle: divStyle};
