import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import sliderTemplate from './templates/slider';

export const Restaurant = t.struct({
    name: t.String,
    address: toString,
    capacity: t.Number,
    description: t.String
});

export const options ={
    fields: {
        name:{
            label: 'Nombre (*)',
            placeholder:'Nombre'
        },
         address:{
             label: 'Direccion (*)',
             placeholder: 'Capa'
         },
         capacity: {
             label: 'Capacidad',
             help: 'capacidad en personas gentai',
             config: {
                 step: 1,
                 min: 1,
                 max: 100
             },
             template: sliderTemplate
         },
         description:{
             label: 'descripcion (*)',
             placeholder : 'Descripcion',
             multiline: true, 
             stylesheet:{
                 ...Form.stylesheet,
                 textbox: {
                     ...Form.stylesheet.textbox,
                     normal: {
                         ...Form.stylesheet.textbox.normal,
                         height: 150
                     },
                     error: {
                        ...Form.stylesheet.textbox.error,
                        height: 150
                     }
                     
                 }
             }
         }
    }
};