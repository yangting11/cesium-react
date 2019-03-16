import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
require('cesium/Widgets/widgets.css');
var Cesium = require('cesium/Cesium');

class App extends Component {
    componentDidMount(){
        var viewer = new Cesium.Viewer('map',{
            animation:false,
            baseLayerPicker:false,
            homeButton:false,
            geocoder:false,
            timeline:false,
            sceneModePicker:false,
            navigationHelpButton:false,
            infoBox:false,
            fullscreenButton:false,
            imageryProvier:false
        })
    }
  render() {
    return (
      <div className="App">
        <div id="map" style={{width:'100%',height:'100vh'}}></div>
      </div>
    );
  }
}

export default App;
