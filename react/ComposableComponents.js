/*** @jsx React.DOM */
var ComposableComponents = React.createClass({
    getInitialState:function() {
        return{
            red:128
        }
    },
    update:function(e){
        this.setState({
            red:this.refs.red.refs.range.getDOMNode().value
        })
    },
    render:function() {
        return (
            <div>
                <numInput
                    ref="red"
                    min={0}
                    max={255}
                    step={5}
                    val={+this.state.red}
                    update={this.update}
                    label="Red"
                    type='range'
                    />
            </div>
        )
    }
});

var numInput = React.createClass({
    propTypes:{
        min:React.PropTypes.number,
        max:React.PropTypes.number,
        step:React.PropTypes.number,
        val:React.PropTypes.number,
        label:React.PropTypes.string,
        update:React.PropTypes.func.isRequired,
        type:React.PropTypes.oneOf(['number', 'range'])
    },
    getDefaultProps:function() {
        return {
            min:null,
            max:null,
            step:1,
            val:0,
            label:'',
            type:'range'
        }
    },
    render:function() {
        var label = this.props.label !== '' ?
            <label>{this.props.label} : {this.props.val}</label> : ''
        return (
            <div>
                <input
                    ref="range"
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.default}
                    onChange={this.props.update}/>
                    {label}
            </div>
        )
    }
});