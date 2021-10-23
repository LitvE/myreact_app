import React from "react";
import classNames from "classnames";
import styles from "./User.module.scss";
/*
class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Grut',
            age: 25,
            isSelected: false,
      };

    }

    switchSelected = () =>{
        const {isSelected} = this.state;
        this.setState({isSelected: !isSelected});
    }

    render(){
        const {name, age, isSelected} = this.state;
        
        //2-г вариант
        /*const userArticleStyles = isSelected ? styles.isSelected : null;
        
        const userArticleStyles = classNames(styles.userCard, {[styles.selectedUser]: isSelected});
        
        const userArticleInlineStyles = {
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
        }

        return (
            // <article style={{
            //     display: "flex",
            //     flexDirection: "column", 
            //     alignItems: "center"}} 
            //     className={(isSelected) ? styles.selectedUser : null} onClick={this.switchSelected}>
            //     <div>{name}</div>
            //     <div>{age}</div>
            // </article>
            <article style={userArticleInlineStyles} className={userArticleStyles} onClick={this.switchSelected}>
                <div>{name}</div>
                <div>{age}</div>
            </article>
        );
    }
}*/

function User (props){
    const {name, age, isSelected, clickHandler} = props;

    const switchSelected = () =>{
        clickHandler();
    }

    const userArticleStyles = classNames(styles.userCard, {[styles.selectedUser]: isSelected});
        
    const userArticleInlineStyles = {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
    }
    return(
        <article style={userArticleInlineStyles} className={userArticleStyles} onClick={switchSelected}>
        <div>{name}</div>
        <div>{age}</div>
    </article>
    );
}

export default User;