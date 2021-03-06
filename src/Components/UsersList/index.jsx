import React from "react";
import UsersListItem from "./UsersListItem";

class UsersList extends React.Component{


    mapUsers = (u, index) => {
        const {id} = u;
        const clickHandler = () =>{
            const {users, setUsers} = this.props;

            const newUsers = [...users];
            newUsers[index] = {
                ...newUsers[index],
                 isSelected: !newUsers[index].isSelected,
                };

            setUsers(newUsers);
        };

        return <UsersListItem key={id} user = {u} clickHandler={clickHandler}/>;
    } 
    // (
    //     <li key={u.id}>
    //         <p>
    //             {u.name} {u.age}
    //         </p>
    //     </li>
    // )

    render(){
        const {users} = this.props;

        return (
            <ul>
                {users.map(this.mapUsers)}
            </ul>
        );
    }
}

export default UsersList;