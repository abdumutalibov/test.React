import React, { Component } from 'react';

class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.status.value);
    }

    render(){

// const add =()=>{
//     const data ={
//         name:this.state.name,
//         status:this.state.status,
//         id:this.state.users.length+1,
//     }
// }
// const newData =[...this.state.data, users]

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                    
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input type="text" ref={(val) => {this.status = val}} required defaultValue={user.status}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>
                


            ) : (

                <tr  key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.status}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );

        });

        return(
            
            <table border='1' className="striped">
                <thead>
                    <tr>
                        <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
            
        );
    }
}

export default Users;