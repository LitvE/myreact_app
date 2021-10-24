import React from "react";
import classNames from "classnames";
import styles from "./Car.module.scss";


class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            mark: props.mark,
            type: props.type,
            price: props.price,
            deleteHandler: props.deleteHandler,
        }
    }

    render(){
        const {mark, type, price, deleteHandler} = this.state;
        const carArticleStyles = classNames(styles.greenColor, {[styles.blueColor]: price >= 20000});

        const markInlineStyle = {
            color: 'red',
        }

        return(
            <article className={carArticleStyles}>
                <div style={markInlineStyle}>{mark}</div>
                <div>{type}</div>
                <div>{price}</div>
                <button onClick={deleteHandler}>Del</button>
            </article>
        );
    }

}

export default Car;