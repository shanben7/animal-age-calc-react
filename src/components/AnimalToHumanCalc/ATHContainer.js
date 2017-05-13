const React = require("react");
const Display = require("./Display");
const SelectAnimal = require("./SelectAnimal");
const SelectAge = require("./SelectAge");
const data = require("../Data");

const animalAgeFactors = data.animalAgeFactors;
const images = data.images;

const ATHContainer = React.createClass({
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
        let result = myAnimalAge * animalAgeFactors[myAnimal];

        // round to 1 decimal place
        return  Math.round((result * 1000) / 1000);
    },

    isShortLiving: function() {
        return (animalAgeFactors[this.state.animal] >= 5.5);
    },

    render: function () {
        let animal = this.state.animal;

        return (<div>
                <Display />
                <SelectAnimal onChange={this.changeAnimal}/>
                <SelectAge lifespan={this.isShortLiving()} onChange={this.changeAge} />
                <img src={images[animal]} alt={animal} width="140" height="140"/>
                <br />
                Your {animal}'s age in human years is: <span style={{fontSize: 35}}><b>{this.calculateAgeInHumanYrs()}</b></span>
                <br />
                {this.generateComment()}
                <p> </p>
                <p> </p>
            </div>
        );
    }
});

module.exports = ATHContainer;