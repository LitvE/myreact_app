import React from "react";

//props - это входящие параметры
//при отрисовке переменная пишется в {}

const Hello = props =>{
    const {name, surname} = props;
    return <div>Hello, {name} {surname}</div>
}

export default Hello;