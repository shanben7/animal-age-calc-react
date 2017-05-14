const React = require("react");
const Display = require("./Display");
const SelectAnimal = require("./SelectAnimal");
const SelectAge = require("./SelectAge");
const data = require("../Data");

const animalAgeFactors = data.animalAgeFactors;
const images = data.images;

const HTAContainer = React.createClass({
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

    calculateAgeInAnimalYears: function() {
        let myAnimal = this.state.animal;
        let myHumanAge = this.state.age;
        let result = myHumanAge / animalAgeFactors[myAnimal];

        // round to 1 decimal place
        return  Math.ceil((result * 1000) / 1000);
    },

    render: function () {
        let animal = this.state.animal;

        return (<div style={{lineHeight: "0.8em"}}>
                <Display />
                <SelectAnimal onChange={this.changeAnimal}/>
                <br/>
                <SelectAge onChange={this.changeAge} />
                <img src={images[animal]} alt={animal} width="140" height="140"/>
                <br />
                Your age in {animal} years is: <span style={{fontSize: 35}}><b>{this.calculateAgeInAnimalYears()}</b></span>
                <br />
                <p> </p>
                <p></p>
            </div>
        );
    }
});

module.exports = HTAContainer;