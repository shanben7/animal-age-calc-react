const React = require("react");
const ATHContainer = require("./components/AnimalToHumanCalc/ATHContainer");
const HTAContainer = require("./components/HumanToAnimalCalc/HTAContainer");
const data = require("./components/Data");

const divStyle = data.divStyle;

const buttonAnimalToHuman = "http://i67.tinypic.com/211oxz6.png";
const buttonHumanToAnimal = "http://i63.tinypic.com/35bxb84.png";
const logoURL = "http://blog.flamingtext.com/blog/2017/05/06/flamingtext_com_1494062756_40926389.png";

const buttonStyleATH= {width: 250, height: 45,
    backgroundImage: 'url(' + buttonAnimalToHuman + ')'};

const buttonStyleHTA= {width: 250, height: 45,
    backgroundImage: 'url(' + buttonHumanToAnimal + ')'};



const AnimalAgeCalculator = React.createClass({
    getInitialState: function () {
        return {animalToHuman: true};
    },

    toggleCalculator: function () {
        this.setState({animalToHuman: !this.state.animalToHuman});
    },

    render: function () {
        var animalToHuman = this.state.animalToHuman;

        return (
            <div style={divStyle}>
                <img src={logoURL} border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/>
                <br />
                <button style={animalToHuman ? buttonStyleATH : buttonStyleHTA}
                        onClick={this.toggleCalculator}>
                </button>

                {animalToHuman ? <ATHContainer/> : <HTAContainer/>}
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
