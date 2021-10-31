import React from "react";

function SelectedUsersList (props){
    const {users} = props;
    const filtredUsers = users.filter(u=>u.isSelected);
    return(
        <ol>
            {filtredUsers.map((fu) => (
                <li key={fu.id}>{fu.name} {fu.surname}</li>
            ))}
        </ol>
    );
}

export default SelectedUsersList;