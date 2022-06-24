import React from 'react'

const Todos = ({todos, deleteTodo}) =>{

    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
                    <div className="collection-item" key={todo.id} style={{width:"780px", border:"1px solid gray", margin:"auto", padding:"5px"}}>
                        {/* <span onClick={()=>deleteTodo(todo.id)}>{todo.content}</span> */}
                        <span>{todo.content}</span>
                        <div style={{float : 'right', width : '180px'}}>
                        <span onClick={()=>{this.handleTask()}} style={{width:'30px', marginLeft : '10px', cursor: 'pointer'}}>Complete</span>
                        <span style={{width:'30px', marginLeft : '10px' , cursor : 'pointer'}}>Edit</span>
                        <span style={{width:'30px', marginLeft : '10px' , cursor : 'pointer'}} onClick={()=>deleteTodo(todo.id)}>Delete</span>
                        </div>
                    </div>
            )
        })
    ) : (
        <p className="center" style={{width:"780px", border:"1px solid gray", margin:"auto", padding:"10px"}}>You have no todo's left</p>
    )
    return(
        <div className="todos collection">
            {todoList }
        </div>
    )
}

export default Todos;