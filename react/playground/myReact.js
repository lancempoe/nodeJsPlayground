/*** @jsx React.DOM */
var APP = React.createClass({
    getDefaultProps:function() {
        return {
            txt:"Weeping Angles",
            cat:0
        }
    },
    propTypes:{
        txt:React.PropTypes.string,
        cat:React.PropTypes.number.isRequired

    },
    getInitialState:function() {
        return{
            txt:'',
            id:0,
            red:128,
            green:128,
            blue:128
        }
    },
    updateColor:function(e){
        this.setState({
            red:this.refs.red.refs.range.getDOMNode().value,
            green:this.refs.green.refs.range.getDOMNode().value,
            blue:this.refs.blue.refs.range.getDOMNode().value
        })
    },
    updateState:function(e) {
        this.setState({txt:e.target.value})
    },
    render:function() {
        return (
            <div>
                {this.state.txt}
                <hr/>
                <ColorWidget ref="red" update={this.updateColor} />
                <label>{this.state.red}</label>
                <ColorWidget ref="green" update={this.updateColor} />
                <label>{this.state.green}</label>
                <ColorWidget ref="blue" update={this.updateColor} />
                <label>{this.state.blue}</label>
            </div>
        )
    }
});

var ColorWidget = React.createClass({
    render:function() {
        return (
            <div>
                <input ref="range" type="range" min="0" max="255" onChange={this.props.update}/>
            </div>
        )
    }
});

var Widget = React.createClass({
    render:function() {
        return (
            <div>
                <input type="text" onChange={this.props.update}/>
                <h1>{this.props.txt}</h1>
            </div>
        )
    }
});

React.renderComponent(<APP txt="The Silence"/>,document.body)