/**
 * Created by Shannon on 2017-05-03.
 */
var React = require("react");

var Menu = React.createClass({
    handleChange: function(e) {
        var animal = e.target.value;
        this.props.onChange(animal);
    },


    render: function () {
        return (<div>
            <select id="animals"
                    onChange = {this.handleChange} >
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
            </select>
        </div>);
    }
});

module.exports = Menu;