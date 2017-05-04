var React = require("react");
var Display = require("./components/Display");
var Menu = require("./components/Menu");
var Input = require("./components/Input");
var Result = require("./components/Result");


var animalAgeFactor = {
    "cat": 3.2,
    "dog": 3.64,
    "guinea pig": 10,
    "hamster": 20,
    "rabbit": 8.89,
    "parakeet": 4.44,
    "mouse": 20
};

var AnimalAgeCalculator = React.createClass({
    getInitialState: function () {
        return {animal: "cat",
                age: ""
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

    calculateAgeInHumanYrs: function() {
        var myAnimal = this.state.animal;
        var myAnimalAge = this.state.age;
        var result = myAnimalAge * animalAgeFactor[myAnimal];

        // round to 1 decimal place
        return Math.round(result * 1000) / 1000
    },

    render: function () {
        return (
            <div className="App" >
                <Display />
                <h1> currently selected animal is: {this.state.animal}</h1>
                <Menu onChange={this.changeAnimal}/>

                <p><Input onChange={this.changeAge} /></p>


                <p>You say your animal's age is: {this.state.age}</p>

                <p>Your pet {this.state.animal}'s age in human years is: {this.calculateAgeInHumanYrs()}</p>
            </div>

        );
    }
});

module.exports = AnimalAgeCalculator;

// TODO: add CSS like padding, colors, etc for formatting of this page
// TODO: add emojis for different animals
// TODO: improve formulas for calculating age (e.g. might be different ratio in first year)
// TODO: add functionality for converting animal years to human years (?)
