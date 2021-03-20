import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
 
export class SimpleMap extends Component {
  render() {
    return (
      <div style={{width:'20px'}}>
        <Map google={this.props.google} zoom={15}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 
 </InfoWindow>
</Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDQHcmEekN-HDohlCDSf1wegjOaxtcjK7g")
})(SimpleMap)