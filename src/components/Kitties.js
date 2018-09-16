import React, { Component } from 'react';
import '../styles/Images.css';
import axios from 'axios';

class Kitties extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            image : 0
        };
    }
    
    componentWillMount(){
        
        
        axios({
            method:'get',
            url:'http://placekitten.com/200/300',
        })
    .then(function(response) {
        this.state.image = response;
    
    })
    .catch(function (error) {
        console.log(error);
    });
    
    }
    
    images = (src) => {
        var img = [];
        for (let i=0; i<=10; i++){
            img[i] = <img src='http://placekitten.com/200/300' alt="Kitties"/>
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

export default Kitties;