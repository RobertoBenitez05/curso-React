import React, {Component} from 'react';
import BackgroundImage from "../../components/BackgroundImage";
import appButton from "../../components/AppButton";
import {View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import {options,Restaurant} from '../../forms/restaurant';
import t  from 'tcomb-form-native';
import {Card} from "react-native-elements";
const Form = t.Form;
import Toast from 'react-native-simple-toast';
import AppButton from '../../components/AppButton';

export default class AddRestaurant extends Component{
    constructor(){
        super();
        this.state = {
            restaurant: {
                name: '',
                address: '',
                capacity: 0,
                description: ''
            }
        };
    }

    save () {

    }
    onChange (restaurant) {
        this.state({restaurant})
    }
    render () {
        const {restaurant} = this.state;

        return (
            <BackgroundImage source = {require ('../../assets/images/iconoCoco.png')}>
                <View style = {styles.container}>
                    <Card title = "formulario de restaurantes chidos">
                        <View>
                            <Form
                                ref = "form"
                                type = {Restaurant}
                                options={options}
                                value= {restaurant}
                                onChange= {(v) => this.onChange(v)}
                            />
                        </View>
                        <AppButton
                        bgColor = "rgba(255,38,74,0.9)"
                        title = "dar de alta"
                        action = {this.save.bind(this)}
                        iconName = "plus"
                        iconSize = {30}
                        iconColor = "#fff" 
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231,228,224,0.8)',
        padding: 10
    }
});