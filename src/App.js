
import { Component } from 'react';
import './App.css';
import Carousel from './Components/Carousel';

const dbSlides = [
  {src: 'https://www.hdcarwallpapers.com/walls/mercedes_amg_f1_w08_eq_power_2017_4k-HD.jpg', title: 'Mercedes F1 Team', alt: 'mercedes'},
  {src: 'https://besthqwallpapers.com/Uploads/20-2-2020/122474/thumb2-ferrari-sf1000-4k-charles-leclerc-2020-f1-cars-formula-1.jpg', title: 'Ferrari F1 Team', alt: 'ferrari'},
  {src: 'https://besthqwallpapers.com/Uploads/23-4-2018/49635/thumb2-4k-max-verstappen-close-up-raceway-2018-cars.jpg', title: 'RedBull F1 Team', alt: 'redbull'},
  {src: 'https://www.f1-fansite.com/wp-content/uploads/2019/11/2019BrazilianGrandPrixSunday_2ST8108.jpg', title: 'McLaren F1 Team', alt: 'mclaren'},
  {src: 'https://besthqwallpapers.com/Uploads/18-3-2019/83846/thumb2-4k-george-russell-close-up-williams-fw42-raceway.jpg', alt: 'williams'}
];

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
      slides: dbSlides.map( slide => ({...slide})),
    };
  }

  render(){
    const {slides} = this.state;
    
    return <Carousel slides={slides}/>
  }
  
}


export default App;
