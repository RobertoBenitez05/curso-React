import React from 'react';
import PreLoader from './components/PreLoader';
import firebaseConfig from './utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
import {Text} from 'react-native-elements';
import GuestNavigation from './navigations/guest';
import LoggedNavigation from './navigations/logged';
import RestaurantEmpty from './components/restaurant/RestaurantEmpty'

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLogged: false,
      loaded:false
    }
  }

  async componentDidMount(){
    //firebase.auth().signOut();
    await firebase.auth().onAuthStateChanged((user) =>{
      if(user !== null ){
        this.setState({
          isLogged:true,
          loaded:true
        });
      }
      else{
        this.setState({
          isLogged:false,
          loaded:false
        });
      }
    })
  }
  render() {

    const {isLogged,loaded}= this.state;
    if(! loaded){
     return(<PreLoader/>);
    }

    if(isLogged){
      return(<LoggedNavigation/>)
    }
    else{
      return(<GuestNavigation/>)
    }
 
  }
}


