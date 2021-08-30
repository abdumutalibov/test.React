import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import './App.css'
class App extends React.Component{

    //Default dummy data 
    state = {

        users:[
          {id:1, name:"Jumavoy", status:'cho`pon', isEditing:false},
          {id:2,name:"John Wuick", status:'Killer', isEditing:false},
          {id:3,name:"Leonardo di Caprio", status:'Actor', isEditing:false}
  
        
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });   
//             const add =()=>{
//                        const data ={
//               //             name:this.state.name,
//               //            status:this.state.status,
//                            id:this.state.users.length+1,
//                        }

//                  }    
//  const newData =[...this.state.data, users]
// this.setState({data:newData})
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
        // users[i].id=id;
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
//       const add =()=>{
//         const data ={
//             name:this.state.name,
//             status:this.state.status,
//             id:this.state.users.length+1,
//         }
//     }
// const newData =[...this.state.data, users]

        return(
            <div className="container">
                <h1> React Table</h1>
                <h1> Homework</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;