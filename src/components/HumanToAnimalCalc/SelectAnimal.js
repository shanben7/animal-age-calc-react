/**
 * Created by Shannon on 2017-05-03.
 */
var React = require("react");

var SelectAnimal = React.createClass({
    handleChange: function(e) {
        var animal = e.target.value;
        this.props.onChange(animal);
    },


    render: function () {
        return (<div>
            <h5>What kind of animal do you want to convert to?</h5>
            <select id="animals"
                    onChange = {this.handleChange}
                    style={{width: 130, fontSize: 14}}>
                <option value="cat">
                    Cat
                </option>
                <option value="dog">
                    Dog
                </option>
                <option value="parakeet">
                    Parakeet
                </option>
                <option value="mouse">
                    Mouse
                </option>
                <option value="guinea pig">
                    Guinea Pig
                </option>
                <option value="rabbit">
                    Rabbit
                </option>
                <option value="hamster">
                    Hamster
                </option>
                <option value="pig">
                    Pig
                </option>
                <option value="rat">
                    Rat
                </option>
                <option value="goat">
                    Goat
                </option>
            </select>
        </div>);
    }
});

module.exports = SelectAnimal;