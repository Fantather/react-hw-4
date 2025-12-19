// UserList - классовый компонент, который хранит state с массивом пользователей
// Каждый пользователь - объект { id, name, age, avatar }
// Рендерит массив UserCard с помощью props
// Добавляет форму для добавления нового пользователя (имя, возраст, выбор аватара)
// При добавлении нового пользователя обновляет state и ререндерит список

import './UserList.css'

import { Component } from "react";
import UserCard from "./UserCard";

import avatar1 from '../images/avatar1.jpg'
import avatar2 from '../images/avatar2.jpg'

const imgArr = [
    avatar1,
    avatar2
]

export default class UserList extends Component
{
    state = {
        users: [],
        userName: '',
        userAge: '',
        userAvatar: imgArr[0]
    }

    handleNameInput = (e) => {
        this.setState({userName: e.target.value});
    }

    handleAgeInput = (e) => {
        const age = e.target.value;
        
        if(age === '' || /^\d+$/.test(age))
        {
            this.setState({userAge: age});
        }
    }

    handleAvatarSelect = (e) => {
        this.setState({userAvatar: e.target.value});
    }

    handleRegisterUser = (e) => {
        this.setState((prevState => {
            const user = {
                id: new Date().toISOString(),
                name: prevState.userName,
                age: prevState.userAge,
                avatar: prevState.userAvatar,
            }
            
            return{
                users: [...prevState.users, user]
            }
        }))
    }


    componentDidMount(){
        const tasks = JSON.parse(localStorage.getItem('users')) || [];
        this.setState({users: tasks});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.users !== this.state.users)
        {
            localStorage.setItem('users', JSON.stringify(this.state.users));
        }
    }
    
    render(){
        const {users, userName, userAge, userAvatar} = this.state;
        return(
            <div className='app-wrap'>
                <div className='users-list-wrap'>
                    <h4>Пользователи:</h4>
                    <div className='users-container'>
                        {users.map((user)=><UserCard name={user.name} age={user.age} avatar={user.avatar} key={user.id}/>)}
                    </div>
                </div>
                <div className="register-form">
                    <h3>Зарегистрировать пользователя:</h3>
                    <div className='register-form__avatar-selection-wrap'>
                        <img className="register-form__avatar" src={userAvatar} alt="User avatar" />
                        <select className="choose-avatar" onChange={this.handleAvatarSelect}>
                            {imgArr.map((path, index)=><option value={path}>{`avatar ${index}`}</option>)}
                        </select>
                    </div>
                    <div className='register-form__user-input-wrap'>
                        <label>Имя:<input type="text" value={userName} onChange={this.handleNameInput}/></label>
                        <label>Возраст:<input type="text" value={userAge} onChange={this.handleAgeInput} /></label>
                    </div>
                    <div>
                        <button onClick={this.handleRegisterUser}>Подтвердить</button>
                    </div>
                </div>
            </div>
        );
    }
}