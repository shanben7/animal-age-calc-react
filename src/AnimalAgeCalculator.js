var React = require("react");
var ATHContainer = require("./components/AnimalToHumanCalc/ATHContainer");
var HTAContainer = require("./components/HumanToAnimalCalc/HTAContainer");
const data = require("./components/Data");

const divStyle = data.divStyle;

const AnimalAgeCalculator = React.createClass({

    render: function () {

        return (
            <div style={divStyle}>
                <HTAContainer />
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
