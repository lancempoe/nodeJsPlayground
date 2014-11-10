/** @jsx React.DOM */
React.createClass({
  render:function() {
    var myStyle = {
      background:'#000',
      height:10
    }
    return (
      <div style={myStyle} data-rendered="x">
        <a href="something" onClick={this.update}>
          {/* just a comment */}
          here is a value
        </a>
        {i>1 ? 'More than one' : 'one'}
        {i>1 && 'more than one'}
      </div>
    )
  }
});