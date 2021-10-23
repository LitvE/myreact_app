import React from "react";
import UsersListItem from "./UsersListItem";

const usersDB = [
    {id: 1, name: 'Grut', age: 25},
    {id: 2, name: 'Ella', age: 20},
]

class UsersList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            users: usersDB.map((u) => ({
                ...u, 
                isSelected: false,
            })),
        };
    }

    mapUsers = (u, index) => {
        const {id} = u;
        const clickHandler = () =>{
            const {users} = this.state;

            const newUsers = [...users];
            newUsers[index] = {
                ...newUsers[index],
                 isSelected: !newUsers[index].isSelected,
                };

            this.setState({users: newUsers});
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
        const {users} = this.state;

        return (
            <ul>
                {users.map(this.mapUsers)}
            </ul>
        );
    }
}

export default UsersList;