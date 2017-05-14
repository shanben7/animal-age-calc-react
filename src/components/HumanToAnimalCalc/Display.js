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
          <h3> Let's find out your age in animal years!</h3>
            </div>


        );
    }
});

module.exports = Display;