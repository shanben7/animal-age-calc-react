/**
 * Created by Shannon on 2017-05-03.
 */

const React = require("react");

const divStyle = {
    fontFamily: "Arial Rounded MT Bold",
    textShadow: "5px 5px 1px white",
};

var Display = React.createClass({
    render: function () {
        return (
            <div style={divStyle}>
                <h4> Let's find out your pet's age in human years!</h4>
                <h5>What kind of pet do you have?</h5>
            </div>


        );
    }
});

module.exports = Display;