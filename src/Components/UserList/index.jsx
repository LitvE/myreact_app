import React, { Component } from 'react'
import UserItem from '../UserItem';



export default class UserList extends Component {
    // constructor(props){
    //     super(props);       
    // }

    mapUser = (user, index) => {
        const {users, updateUsers} = this.props;
        const selectUserHandler = () => {
            const updatedUsers = [...users];
            updatedUsers[index].isSelected = !updatedUsers[index].isSelected;
            updateUsers(updatedUsers);

        };

        return <UserItem key={user.id} user={user} onSelectUser={selectUserHandler} isSelected={user.isSelected}/>
    }

    render() {
        const {users} = this.props;
        return (
            <div>
                <ul>{users.map(this.mapUser)}</ul>
            </div>
        )
    }
}
