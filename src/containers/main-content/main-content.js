import React from 'react';
import './main-content.scss';

import TodoList from '../../components/todo-list/todo-list';
import CommentList from '../../components/comment-list/comment-list';

class MainContent extends React.Component {

    state = {
        todo: [
            {desc: "Todo 1", id:1, comments: [{text: "Adadad",id: 1,avatar: 'red'},],active: false},
            {desc: "Todo 2", id:2, comments: [{text: "Adadad",id: 2,avatar: 'black'},{text: "Adadad",id: 3, avatar: 'red'}],active: true}
        ],
        newItemValue: '',
        newCommentValue: '',
        focus: false,
        editCommentId: null
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

       this.setState({todo: newTodo})
       localStorage.setItem('todo',JSON.stringify(newTodo))

    };

    remItem = todoItem => {
        const idx = [...this.state.todo].findIndex(item => item.id === todoItem.id);
        const newTodo =  [ ...this.state.todo.slice(0,idx), ...this.state.todo.slice(idx + 1) ]
        this.setState({todo: newTodo});
        localStorage.setItem('todo',JSON.stringify(newTodo))
    };

    remComment = id => {
        const todoCopy = [...this.state.todo]
        const idxItem = todoCopy.findIndex(item=> item.active)
        const idxComment = todoCopy[idxItem].comments.findIndex(item=> item.id === id)
        todoCopy[idxItem].comments.splice(idxComment,1)

        this.setState({todo: todoCopy});
        localStorage.setItem('todo',JSON.stringify(todoCopy))
    };

    setItem = () =>{
       if(this.state.newItemValue.length > 0){
        const newItem = {
            desc: this.state.newItemValue,
            comments: [],
            active: true,
            id: new Date().getTime()
        }
        
        this.setState({
            todo: [...this.state.todo.map(item =>{
            item.active = false
            return item
            }), newItem],
            newItemValue: ''});

        localStorage.setItem('todo',JSON.stringify([...this.state.todo, newItem]));

       }else {
           alert("Please write value before add")
       }
    }

    setComment = () =>{
        const copyArr = [...this.state.todo];
        const idx = [...this.state.todo].findIndex(item=> item.active );

        if(this.state.newCommentValue.length > 0){
            if(this.state.focus){
                const commentIdx = copyArr[idx].comments.findIndex(item=> item.id === this.state.editCommentId)
                copyArr[idx].comments[commentIdx].text = this.state.newCommentValue
            }else{
                const newComment = {
                    id: new Date().getTime(),
                    avatar: ['red', 'green' , 'pink'][Math.floor(Math.random() * 3 )],
                    text: this.state.newCommentValue
                }
                copyArr[idx].comments.push(newComment)
            }
        this.setState({todo: copyArr,newCommentValue: '',focus: false, editCommentId: null})
        localStorage.setItem('todo',JSON.stringify(copyArr))

        }
    }

    editComment = id =>{
        const editText = [...this.state.todo]
        .find(item=> item.active).comments
        .find(item=> item.id === id).text;

        this.setState({newCommentValue: editText, focus: true, editCommentId: id});
        document.getElementById('cl_i').focus()
    }

    setItemValue = newItemValue => {
        this.setState({newItemValue})
    }

    setCommentValue = newCommentValue => {
        this.setState({newCommentValue})
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
             newItemValue={this.state.newItemValue}
             />
            <CommentList
             setCommentValue={this.setCommentValue}
             todo = {this.state.todo}
             setComment ={this.setComment}
             newCommentValue={this.state.newCommentValue}
             remComment={this.remComment}
             focus={this.state.focus}
             editComment={this.editComment}
             />
         </div>
        )
    }
};

export default MainContent