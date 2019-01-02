import React from 'react';
import BackgroundImage from "../../components/BackgroundImage"
import PreLoader from '../../components/PreLoader';
import {styleSheet, FlatList} from 'react-native';
import {ListItems} from "react-native-elements"
import firebaseConfig from '../../utils/firebase';
import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';
import RestaurantEmpty from '../../components/restaurant/RestaurantEmpty'
import RestaurantAddButton from '../../components/restaurant/RestaurantAddButton'

export default class Restaurants extends Component {
    constructor () {
        super();
        this.state = {
            restaurants: [],
            loaded: false,
            restaurant_logo: require('../../assets/images/iconoCoco.png')
        };

        this.refRestaurants = firebase.database().ref().child('restaurants');
    }

    

    componentDidMount(){
        this.refRestaurants.on('value', snapshot => {
            let restaurants = [];
            snapshot.forEach(row => {
                restaurants.push({
                    id:row.key,
                    name: row.val().name,
                    address: row.val().address,
                    capacity: row.val().capacity,
                    description: row.val().description
                })
            });

            this.setState({
                restaurants,
                loaded: true
            })

        })
    }

    addRestaurant(){
        const navigateAction = navigateAction.navigate({
            routName : 'AssRestaurant'
        });
        this.props.navigattion.dispatch(navigateAction);
    }
    
    restaurantDetail (restaurant){
    
    }
    
    renderRestaurant (restaurant) {
        return(
            <ListItem
            containerStyle= {styles.item}
            titleStyle = {styles.title}
            roundAvatar
            title= {`${restaurant.name} (Capacidad: ${restaurant.capacity})`}
            avatar = {this.state.restaurant_logo}
            onPress= {() => this.restaurantDetail(restaurant)}
            rightIcon = {{name:'arrow-right', type: 'font-awesome', style:styles.listIconStyle}}
            />
        )
    }

    render() {
        const {loaded, restaurants} = this.state;

        if(!loaded) {
          return <PreLoader/>  
        };

        if(!restaurants.length){
            return(
                <BackgroundImage source = {require('../../assets/images/susu2.jpg')}>
                    <RestaurantEmptytext text = "No Hay Restaurantes kawais"/>
                    <RestaurantAddButton addRestaurant = {this.addRestaurant.bind(this)} />

                </BackgroundImage>   
            );
        }

        return(
            <BackgroundImage source = {require('../../assets/images/susu2.jpg')}>
               <FlatList
                    data={restaurant}
                    renderItem = {(data) => this.renderRestaurant(data.item)}
               />
                <RestaurantAddButton addRestaurant = {this.addRestaurant.bind(this)} />

            </BackgroundImage>   
        );
    }

    
}

const styles = StyleSheet.create({
    title:{
        color:'#fff'
    },
    listIconStyle:{
        marginRight: 10,
        fontSize: 15,
        color: 'rgba(255,38,74,0.6)'
    },
    item: {
        padding: 0,
        backgroundColor: 'rgba(206,206,206,0.6)'

    }
});


