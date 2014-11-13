/** @jsx React.DOM */
var APP =
    React.createClass({
        update:function(){
            var newVal = this.props.val+1
            this.setProps({val:newVal})
        },
        componentWillMount:function() {
            console.log("here i am")
        },
        render:function(){
            console.log("hello world")
            return <button onClick={this.update}>{this.props.val}</button>
        },
        componentDidMount:function() {
            console.log("nice place here.")
        },
        componentWillUnmount:function() {
            console.log("goodbye")
        }
    });

    window.render = function() {
        React.renderComponent(
            <APP val={0}/>,
            document.getElementById('panel')
        )
    }

    window.unmount = function(){
        React.unmountComponentAtNode(document.getElementById('panel'))
    }