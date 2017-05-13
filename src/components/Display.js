/**
 * Created by Shannon on 2017-05-03.
 */

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
                <img src="http://blog.flamingtext.com/blog/2017/05/06/flamingtext_com_1494062756_40926389.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/>
                <h1> Let's find out your pet's age in human years!</h1>
                <h2>What kind of pet do you have?</h2>
            </div>


        );
    }
});

module.exports = Display;