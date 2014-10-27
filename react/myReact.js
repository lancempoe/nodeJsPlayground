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
//        console.log(this.props.txt)
//        console.log(this.props.cat)
        return (
            <div>
                <input type="text" onChange={this.updateState}/>
                <h1>{this.state.txt}</h1>
            </div>
            )
    }
});

React.renderComponent(<APP txt="The Silence"/>,document.body)