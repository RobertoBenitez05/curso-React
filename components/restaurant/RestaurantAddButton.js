import React, {Component} from 'react';

export default class RestaurantAddButton {
   render   (){
       const {RestaurantAddButton} = this.props;
       return (
        <View style = {Style.buttonContainer}>
            <AppButton
            bgColor = "rgba(255,38,74,0.6)"
            title = "Añadir un restaurante"
            action = {addRestaurant}
            iconName = "plus"
            iconSize = {30}
            iconColor= "#fff"
            />
        </View>
       ) 
   } 
}