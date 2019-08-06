import React from 'react';
import './main-content.scss';

import TodoList from '../todo-list';
import CommentList from '../comment-list';

class MainContent extends React.Component {
    state = {
        todo: [
            {desc: "Todo 1", id:1, comments: [{text: "Adadad",id: 1,avatar: 'red'},],active: false},
            {desc: "Todo 2", id:2, comments: [{text: "Adadad",id: 2,avatar: 'black'},{text: "Adadad",id: 2, avatar: 'red'}],active: true}
        ],
        newItemValue: '',
        newCommentValue: ''
    }

    componentDidMount(){
       if(localStorage.getItem('todo')){
        this.setState({
            todo: JSON.parse(localStorage.getItem("todo"))
        })
       }
    };

    setActive = (id) => {
        const newTodo = [...this.state.todo].map(item =>{
            if(item.id === id){
                item.active = true
            }else{
                item.active = false
            }
            return item
        });
       this.setState({todo: newTodo,activeItem: [...this.state.todo].find(item => item.active === true )})
    };

    remItem = todoItem => {
        const idx = [...this.state.todo].findIndex(item => item.id === todoItem.id);
        this.setState({todo: [ ...this.state.todo.slice(0,idx), ...this.state.todo.slice(idx + 1) ]})
        localStorage.setItem('todo',JSON.stringify( [ ...this.state.todo.slice(0,idx), ...this.state.todo.slice(idx + 1)]))

       
    }

    setItem = () =>{
       if(this.state.newItemValue.length > 0){
        const newItem = {
            desc: this.state.newItemValue,
            comments: [],
            active: true,
            id: new Date().getTime()
        }
        
        this.setState({todo: [...this.state.todo.map(item =>{
            item.active = false
            return item
        }), newItem],newItemValue: ''})
        localStorage.setItem('todo',JSON.stringify([...this.state.todo, newItem]))
       }else{
           alert("Please write value before add")
       }
    }

    setComment = () =>{
        if(this.state.newCommentValue.length > 0){
            console.log("asda")
            const newComment = {
                text: this.state.newCommentValue,
                id: new Date().getTime(),
                avatar: ['red', 'green' , 'pink'][Math.floor(Math.random() * 3 )]
            }

            const copyArr = [...this.state.todo]
            const idx = [...this.state.todo].findIndex(item=> item.active )
            console.log(copyArr,idx)
            copyArr[idx].comments.push(newComment)

            this.setState({todo: copyArr,newCommentValue: ''})
    
        }
    }

    setItemValue = (newItemValue) =>{
        this.setState({newItemValue})
    }

    setCommentValue = (newCommentValue) => {
        this.setState({newCommentValue})
    }

    render(){
        console.log(this.state.todo)
        return (
         <div className="m_container">
            <TodoList
             setItemValue={this.setItemValue}
             setItem={this.setItem}
             remItem={this.remItem}
             setActive={this.setActive}
             todo={this.state.todo}
             newItemValue={this.state.newItemValue}
             />
            <CommentList
             setCommentValue={this.setCommentValue}
             todo = {this.state.todo}
             setComment ={this.setComment}
             newCommentValue={this.state.newCommentValue}
             />
         </div>
        )
    }
};

export default MainContent