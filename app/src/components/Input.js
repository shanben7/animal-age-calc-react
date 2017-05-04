/**
 * Created by Shannon on 2017-05-03.
 */


var React = require("react");

var Input = React.createClass({
    getInitialState: function () {
        return {input: ""}
    },

    handleUserInput: function(e) {
        var age = Number(e.target.value);
        this.props.onChange(age);
        this.setState({input: age});
    },

    render: function () {
        return (
            <div>
                <input  type="number" min="0" max="35"
                        onInput={this.onInput}
                       onChange={this.handleUserInput}
                        value={this.state.userInput}
                    />
            </div>
        );
    }
});

// TODO: fix pattern, or get number type to work with max/min
// or, change input so that instead, it is another select, limiting age options appropriately for each animal.

module.exports = Input;



