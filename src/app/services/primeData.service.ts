import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var $: any;

@Injectable({
    providedIn: 'root'
})

export class PrimeDataService {

    "data": [
        {"vin": "a1653d4d", "brand": "VW", "year": 1998, "color": "White", "price": 10000},
        {"vin":"ddeb9b10","brand":"Mercedes","year":1985,"color":"Green","price":25000},
        {"vin":"d8ebe413","brand":"Jaguar","year":1979,"color":"Silver","price":30000},
        {"vin":"aab227b7","brand":"Audi","year":1970,"color":"Black","price":12000},
        {"vin":"631f7412","brand":"Volvo","year":1992,"color":"Red","price":15500},
        {"vin":"7d2d22b0","brand":"VW","year":1993,"color":"Maroon","price":40000},
        {"vin":"50e900ca","brand":"Fiat","year":1964,"color":"Blue","price":25000},
        {"vin":"4bbcd603","brand":"Renault","year":1983,"color":"Maroon","price":22000},
        {"vin":"70214c7e","brand":"Renault","year":1961,"color":"Black","price":19000},
        {"vin":"ec229a92","brand":"Audi","year":1984,"color":"Brown","price":36000},
        {"vin":"1083ee40","brand":"VW","year":1984,"color":"Silver","price":215000},
        {"vin":"6e0da3ab","brand":"Volvo","year":1987,"color":"Silver","price":32000},
        {"vin":"5aee636b","brand":"Jaguar","year":1995,"color":"Maroon","price":20000},
        {"vin":"7cc43997","brand":"Jaguar","year":1984,"color":"Orange","price":14000},
        {"vin":"88ec9f66","brand":"Honda","year":1989,"color":"Maroon","price":36000},
        {"vin":"f5a4a5f5","brand":"BMW","year":1986,"color":"Blue","price":28000},
        {"vin":"15b9a5c9","brand":"Mercedes","year":1986,"color":"Orange","price":14000},
        {"vin":"f7e18d01","brand":"Mercedes","year":1991,"color":"White","price":25000},
        {"vin":"cec593d7","brand":"VW","year":1992,"color":"Blue","price":36000},
        {"vin":"d5bac4f0","brand":"Renault","year":2001,"color":"Blue","price":25000},
        {"vin":"56b527c8","brand":"Jaguar","year":1990,"color":"Yellow","price":52000},
        {"vin":"1ac011ff","brand":"Audi","year":1966,"color":"Maroon","price":45000},
        {"vin":"fc074185","brand":"BMW","year":1962,"color":"Blue","price":54000},
        {"vin":"606ba663","brand":"Honda","year":1982,"color":"Blue","price":22000},
        {"vin":"d05060b8","brand":"Mercedes","year":2003,"color":"Silver","price":15000},
        {"vin":"46e4bbe8","brand":"Mercedes","year":1986,"color":"White","price":18000},
        {"vin":"c29da0d7","brand":"BMW","year":1983,"color":"Brown","price":32000},
        {"vin":"24622f70","brand":"VW","year":1973,"color":"Maroon","price":36000},
        {"vin":"7f573d2c","brand":"Mercedes","year":1991,"color":"Red","price":21000},
        {"vin":"b69e6f5c","brand":"Jaguar","year":1993,"color":"Yellow","price":16000},
        {"vin":"ead9bf1d","brand":"Fiat","year":1968,"color":"Maroon","price":43000},
        {"vin":"bc58113e","brand":"Ren-ault","year":1981,"color":"Silver","price":36000},
        {"vin":"2989d5b1","brand":"Honda","year":2006,"color":"Blue","price":240000}
    ];


    constructor(private http: HttpClient) {}


    getCarsMedium() {
        return this.data;
    }
}
