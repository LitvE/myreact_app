import React, { Component } from "react";

class MouseTracker extends Component{
    constructor(props){
        super(props);
         this.state = {
             x: 0,
             y: 0,
         };

         console.log('Constructor');
    }

    moveCat = (e) => {         
        this.setState({x:  e.clientX, y:  e.clientY});
        
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.moveCat);
        console.log('Did mount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Did update');
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.moveCat);
        console.log('Will unmount');
    }

    render(){
        return (
            <div style={{position: 'relative', height: '100vh'}}>
                <img style={{
                    position: 'absolute',
                    top: this.state.y,
                    left: this.state.x,
                }}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhi4di-NHbiQV4TKKOk6kQ5TvZaVme_ZXLw&usqp=CAU" alt="cat" />
            </div>
        );
    }
}

export default MouseTracker;