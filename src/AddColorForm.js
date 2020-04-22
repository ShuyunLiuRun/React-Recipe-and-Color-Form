import React from 'react'
import {Component} from 'react'
import propTypes from 'prop-types'

class AddColorForm extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
        this.title = null;
        this.color = null;
        this.setTitleRef = element => {
            this.title = element 
        }
        this.setColorRef = element =>{
            this.color = element
        }
        if(this.title) this.title.focus();
    }

    submit(){
        this.props.onNewColor(this.title.value , this.color.value)
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <input ref={this.setTitleRef}
                    type = "text"
                    placeholder = "color title..." required/>
                <input ref={this.setColorRef}
                    type = "color" required/>
                <button>Add</button>
            </form>
        )
    }
}
AddColorForm.propTypes = {
    onNewColor:propTypes.func
}
AddColorForm.defaultProps = {
    onNewColor: f=>f
}
export default AddColorForm;