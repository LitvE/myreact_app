import React, { Component } from 'react'

class UserItem extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        const {user: {id, name, surname}, onSelectUser} = this.props;
        return (
            <li>
                <span> id: "{id}" fullmane: "{name} {surname}"</span>
                <button onClick={onSelectUser}>Select</button>
            </li>
        )
    }
}

export default UserItem;
