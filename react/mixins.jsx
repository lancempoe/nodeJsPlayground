/** @jsx React.DOM */

var ReactMixins = {
    componentWillMount:function() {
        console.log("will mount")
    },
    getInitialState:function() {
        return {count:0}
    },
    incrementCount:function() {
        this.setState({count:this.state.count+1})
    }

}
var APP =
    React.createClass({
        render:function() {
            return (
                <div>
                    <buttonComponent txt="this is the button"/>
                    <inputComponent txt="this is the input"/>
                </div>
            )
        }
    });
var buttonComponent =
    React.createClass({
        mixins:[ReactMixins],
        render:function() {
            return <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
        }
    });
var inputComponent =
    React.createClass({
        mixins:[ReactMixins],
        componentWillMount:function() {
            setInterval(this.incrementCount, 1000)
        },
        render:function() {
            return <input value={this.props.txt + ' - ' +  this.state.count} />
        }
    });
React.renderComponent(
    <APP />,
    document.getElementById('app'))