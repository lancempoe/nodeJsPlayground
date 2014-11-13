/** @jsx React.DOM */
var ReactLink =
    React.createClass({
        mixins:[React.addons.LinkedStateMixin],
        getInitialState:function(){
            return {
                name:'',
                email:'',
                roofType:''
            }
        },
        render:function(){
            return (
                    <form>
                        <div>
                            <input valueLink={this.linkState('name')} type="text" placeholder="Name" />
                            <label>*{this.state.name}*</label>
                        </div>
                        <div>
                            <input valueLink={this.linkState('email')} type="text" placeholder="Email" />
                            <label>*{this.state.email}*</label>
                        </div>
                        <div>
                            <input valueLink={this.linkState('roofType')} type="text" placeholder="roofType" />
                            <label>*{this.state.roofType}*</label>
                        </div>
                    </form>
                )
        }
    });