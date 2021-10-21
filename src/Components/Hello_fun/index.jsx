import React from "react";
import styles from "./Hello.module.scss";

//props - это входящие параметры
//при отрисовке переменная пишется в {}


const Hello = props =>{
    
    const {name, greeting=true} = props;
    /*
    if(greeting){
        return <div className={styles.wrapper_hello}>Hello, {name}!</div>;
    } else{
        return <div className={styles.wrapper_hello}>Bye, {name}!</div>;
    }*/
    return (
        <div>
            {greeting ? 'Hello' : 'Bye'}, {name}!
        </div>
    );

    
    /*
   return <div>Hello, ReactJS!!</div>*/
}


export default Hello;