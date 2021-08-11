import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import './App.css'
class App extends React.Component{

    //Default dummy data 
    state = {

        users:[
          {name:"Jumavoy", status:'cho`pon', isEditing:false},
          {name:"John Wuick", status:'Killer', isEditing:false},
          {name:"Leonardo di Caprio", status:'Actor', isEditing:false}
    
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, name, status) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].status = status;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                <h1> React Table</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;