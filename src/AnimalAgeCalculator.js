var React = require("react");
var Display = require("./components/Display");
var SelectAnimal = require("./components/SelectAnimal");
var SelectAge = require("./components/SelectAge");

const divStyle = {
    fontFamily: "Arial Rounded MT Bold",
    textShadow: "5px 2px 1px white",
    fontSize: 20
};

const animalAgeFactor = {
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

const AnimalAgeCalculator = React.createClass({
    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number
    },

    getInitialState: function () {
        return {animal: "cat",
            age: "1",
        };
    },

    changeAnimal: function (selectedAnimal) {
        this.setState(
            {animal: selectedAnimal}
        );
    },

    changeAge: function (userInputAge) {
        this.setState({age: userInputAge})
    },

    generateComment: function () {
        let humanAge = this.calculateAgeInHumanYrs();
        let animal = this.state.animal;
        let comment;

        if (humanAge >= 100) {
            return "Wow! Your " + animal + " is ancient!"
        }

        else if (humanAge >= 65) {
            comment = "get a senior's discount";
        }

        else if (humanAge >= 50) {
            comment = "settle into a cozy retirement";
        }

        else if (humanAge >= 30) {
            comment = "buy a house in the 'burbs";
        }

        else if (humanAge >= 23) {
            comment = "have a college degree";
        }

        else if (humanAge >= 20) {
            comment = "go to college";
        }

        else if (humanAge >= 19) {
            comment = "buy beer";
        }
        else if (humanAge >= 18) {
            comment = "gamble";
        }

        else if (humanAge >= 17) {
            comment = "graduate from high school"
        }

        else if (humanAge >= 16) {
            comment = "drive"
        }

        else if (humanAge >= 14) {
            comment = "experience the joys of teen acne"
        }

        else if (humanAge >= 11) {
            comment = "go to middle school"
        }

        else if (humanAge >= 6) {
            comment = "go to elementary school"
        }

        else if (humanAge >= 4) {
            comment = "go to preschool"
        }

        else if (humanAge >= 3) {
            comment = "talk"
        }

        else if (humanAge >= 2) {
            comment = "crawl"
        }

        return "Your " + animal + " is old enough to " + comment + "!";

    },

    calculateAgeInHumanYrs: function() {
        let myAnimal = this.state.animal;
        let myAnimalAge = this.state.age;
        let result = myAnimalAge * animalAgeFactor[myAnimal];

        // round to 1 decimal place
        return  Math.round((result * 1000) / 1000);
    },

    isShortLiving: function() {
        return (animalAgeFactor[this.state.animal] >= 5.5);
    },

    render: function () {
        let animal = this.state.animal;

        return (
            <div style={divStyle}>
                <Display />
                <SelectAnimal onChange={this.changeAnimal}/>
                <SelectAge lifespan={this.isShortLiving()} onChange={this.changeAge} />
                <img src={images[animal]} width="175" height="175"/>
                <br />
                Your pet {animal}'s age in human years is: {this.calculateAgeInHumanYrs()}
                <br />
                {this.generateComment()}
                <p> </p>
                <p> </p>
            </div>


        );
    }
});

module.exports = AnimalAgeCalculator;

// TODO: <img src={images[animal]} />

// TODO: add CSS like padding, colors, etc for formatting of this page
// TODO: add emojis for different animals
// TODO: improve formulas for calculating age (e.g. might be different ratio in first year)
// TODO: add functionality for converting animal years to human years (?)
