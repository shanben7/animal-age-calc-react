/**
 * Created by Shannon on 2017-05-03.
 */
const React = require("react");

const myPattern= "[0-9]*";

const Input = React.createClass({

    handleChange: function (e) {
        let age = Number(e.target.value);
        this.props.onChange(age);
    },

    render: function () {
        return (
            <div>
                <div style={{display: "inline-block", marginRight: 10}}> How old are you? </div>

                <div style={{display:"inline-block"}}>
                    <input type="number" pattern={myPattern} max="150" min="0"
                        onChange={this.handleChange}
                        style={{width:70, fontSize: 12}} />
                </div>
            </div>
        );
    }
});


module.exports = Input;



