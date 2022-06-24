import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content : '',
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit() {
        //e.preventDefault();
        if(this.state.content === ''){
            window.alert ("Tidak Dapat Menambahkan To Do List");
        }
        else {
            this.props.AddTodo(this.state);
        this.setState({
            content : ''
        })
        }
        
    }
    render(){
        return(
            <div style={{width: '300px', margin : 'auto', marginBottom : '20px'}}>
                <form>
                    <input style={{paddingTop : '3px', borderBlockColor : '#AED6F1', outlineColor : '#AED6F1'}} type="text" onChange={this.handleChange} value={this.state.content} placeholder="Tambahkan Todolist" />
                    <label style={{backgroundColor: '#AED6F1', border : '1px solid gray', padding : '0px 9px 0px 9px', fontWeight : 'bold', position: 'absolute', borderRadius : '2.8px', textAlign : 'center'}} onClick={()=>{this.handleSubmit()}}>Create</label>
                </form>
            </div>
        )
    }
}

export default AddTodo;