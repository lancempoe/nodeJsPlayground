/** @jsx React.DOM */
var APP =
        React.createClass({
        render:function(){
            return (
                <div>
                    <BButton href="javascript:alert('hello')" className="btn-primary">
                        <BHeart className="glyphicon-heart"/> Button</BButton>
                    <BButton href="javascript:alert('hello')" className="btn-success">
                        <BHeart className="glyphicon-pencil"/> Button</BButton>
                    <BButton href="javascript:alert('hello')" className="btn-danger">
                        <BHeart className="glyphicon-inbox"/> Button</BButton>
                    <BButton href="javascript:alert('hello')" className="btn-danger">
                        <BHeart className="glyphicon-euro"/> Button</BButton>
                </div>
            )
        }
    });

var BButton =
    React.createClass({
        render:function() {
            return this.transferPropsTo(<a className="btn">{this.props.children}</a>)
        }
    });

var BHeart =
    React.createClass({
        render:function() {
            return this.transferPropsTo(<span className="glyphicon"></span>)
        }
    });

React.renderComponent(<APP/>,document.body)