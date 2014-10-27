/** @jsx React.DOM */
var APP =
        React.createClass({
        render:function(){
            return (
                <BButton>I <BHeart/> React</BButton>
            )
        }
    });

var BButton =
    React.createClass({
        render:function() {
            return <a className="btn btn-primary">{this.props.children}</a>
        }
    });

var BHeart =
    React.createClass({
        render:function() {
            return <span className="glyphicon glyphicon-heart"></span>
        }
    });

React.renderComponent(<APP/>,document.body)