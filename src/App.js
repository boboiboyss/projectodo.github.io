import React, {Component}from 'react';
import Todo from './Todos';
import AddTodo from './AddForm';

class App extends Component {
  state = {
    todos : [
      
      // {id:2, content: 'play mario kart'}
    ],
    isComplete : true,
    modalUpdate : false
  }

  handleTaskTrue(){
    this.setState({
      isComplete : true
    })
  }

  handleTaskFalse(){
    this.setState({
      isComplete : false
    })
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos : todos
    })
  }

  updateTodo = (id)=>{
    const todos = this.state.todos.find(todo=> {
      return todo.id === id
    });
    console.log(todos);
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos= [...this.state.todos, todo];
    this.setState({
      todos : todos,
    });

  }
  render(){

    // let Task;
    // if(!this.state.isComplete){
    //   Task = (
    //     <span onClick={()=>{this.handleTaskTrue()}} style={{width:'30px', marginLeft : '10px', cursor: 'pointer'}}>Not Complete</span>
    //   ) 
    // } 
    // else {
    //   Task = (
    //     <span onClick={()=>{this.handleTaskFalse()}} style={{width:'30px', marginLeft : '10px', cursor: 'pointer', color : 'Green', fontSize : 'bold'}}>Complete</span>
    //   )
    // } 


    const todoList = this.state.todos.length ? (this.state.
      todos.map(todo =>{
          return (
                  <div className="collection-item" key={todo.id} style={{width:"780px", border:"1px solid gray", margin:"auto", padding:"5px", marginBottom : '10px', borderRadius : '3px', backgroundColor : "#AED6F1"}}>
                      {/* <span onClick={()=>deleteTodo(todo.id)}>{todo.content}</span> */}
                      <span>{todo.content}</span>
                      <div style={{float : 'right', width : '240px' , fontWeight : 'bold'}}>
                        {
                          this.state.isComplete? (<span onClick={()=>{this.handleTaskFalse()}} style={{width:'40px', marginLeft : '10px', cursor: 'pointer'}}>Not Complete</span>) : (<span onClick={()=>{this.handleTaskTrue()}} style={{width:'30px', marginLeft : '10px', cursor: 'pointer', color : 'Green'}}>Complete</span>)
                        }
                      <span onClick={()=>this.updateTodo(todo.id)} style={{width:'40px', marginLeft : '10px' , cursor : 'pointer', color : 'green'}}>Update</span>
                      <span style={{width:'40px', marginLeft : '10px' , cursor : 'pointer', color:'red'}} onClick={()=>this.deleteTodo(todo.id)}>Delete</span>
                      </div>
                  </div>
          )
      })
  ) : (
      <p className="center" style={{width:"780px", border:"1px solid gray", margin:"auto", padding:"5px" , borderRadius : '3px', backgroundColor : "#AED6F1", textAlign : 'center', fontWeight : 'bold'}}>To Do List Kosong</p>
  )

    return(
      <div className="todo-app container">
        <h1 className="center blue-text" style={{textAlign:"center", color:"blue"}}>React JS - To Do List</h1>

        <AddTodo AddTodo={this.addTodo} />
        {todoList}
        {/* <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} /> */}
      </div>
    )
  }
}


export default App;
