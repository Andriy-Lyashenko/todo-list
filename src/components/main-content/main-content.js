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
        newCommentvalue: ''
    }

    componentDidMount(){
       if(localStorage.getItem('todo')){
        this.setState({
            activeItem: [...this.state.todo].find(item => item.active === true ),
            todo: JSON.parse(localStorage.getItem("todo"))
        })
       }else{
           this.setState({activeItem: [...this.state.todo].find(item => item.active === true )})
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

        if(todoItem.active){
            const copyArr = [...this.state.todo]
            if(!this.state.todo.idx === 0 && !this.state.todo.length === 1){
                this.setState({todo:[]})
            }else{
                copyArr[0].active = true
                this.setState({todo: [ ...copyArr.slice(0,idx), ...copyArr.slice(idx + 1) ]})
            }
            
        }else {
            this.setState({todo: [ ...this.state.todo.slice(0,idx), ...this.state.todo.slice(idx + 1) ]})
            localStorage.setItem('todo',JSON.stringify( [ ...this.state.todo.slice(0,idx), ...this.state.todo.slice(idx + 1)]))
        }
       
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

    setItemValue = (newItemValue) =>{
        this.setState({newItemValue})
    }

    render(){
        return (
         <div className="m_container">
            <TodoList
             setItemValue={this.setItemValue}
             setItem={this.setItem}
             remItem={this.remItem}
             setActive={this.setActive}
             todo={this.state.todo}
             newItemValue={this.state.newItemValue}/>
            <CommentList todo = {this.state.todo}/>
         </div>
        )
    }
};

export default MainContent