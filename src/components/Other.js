import React, { Component } from 'react';
import '../styles/Images.css';
import axios from 'axios';

class Other extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            image : <img />
        };
    }
    
    componentWillMount(){
        
        
        axios({
            method:'get',
            url:'https://picsum.photos/200/300/?random',
        })
    .then(function(response) {
        console.log(response);
        this.state.image = response;
    
    })
    .catch(function (error) {
        console.log(error);
    });
    
    }
    
    images = (src) => {
        var img = [];
        for (let i=0; i<=10; i++){
            img[i] = <img src='https://picsum.photos/200/300/?random' alt="Other"/>
        }
        return img
    }
    
  render() {
      
    return (
        <div class="grid-container">
            {this.images()}
        </div>
    );
  }
}

export default Other;