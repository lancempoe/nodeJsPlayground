/** @jsx React.DOM */

var Integration =
    React.createClass({
        getInitialState:function() {
            return {data: []}
        },
        componentWillMount:function() {
            reqwest({
                url:'http://filltext.com/?rows=10&val={randomNumber}',
                type: '',
                success:function(resp){
                    this.setState({data:resp})
                }.bind(this)
            })
        },
        render:function(){
            var items = this.state.data.map(function(item) {
                return <li>{item.val}</li>
            })
            return <ul>{items}</ul>
        }
    });