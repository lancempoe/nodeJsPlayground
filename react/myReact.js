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
        return{txt:'', id:0}
    },
    updateState:function(e) {
        this.setState({txt:e.target.value})
    },
    render:function() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.updateState} />
                <Widget txt={this.state.txt} update={this.updateState} />
                <Widget txt={this.state.txt} update={this.updateState} />
                <Widget txt={this.state.txt} update={this.updateState} />
                <Widget txt={this.state.txt} update={this.updateState} />
                <Widget txt={this.state.txt} update={this.updateState} />
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