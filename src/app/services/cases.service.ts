import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CasesService {

    api = environment.apiAddress;

    constructor(private http: HttpClient) {
    }

    getMyCases(id) {
        return this.http.get(this.api + '/myCases/' + id);
    }
    getdtlCases(id) {
        return this.http.get(this.api + '/dtlsCase/' + id);
    }
    checkInCases(data) {
        return this.http.put<any>(this.api + '/cinCases', data);
    }
    checkOutCases(data) {
        return this.http.put<any>(this.api + '/coutCases', data);
    }
    activateCases(data) {
        return this.http.put<any>(this.api + '/activateCases', data);
    }
    getusers() {
        return this.http.get<any>('https://devamlapi.azurewebsites.net/users');
    }
    routeCases(data) {
        return this.http.put<any>(this.api + '/rteCases', data);
    }
    closeCases(data) {
        return this.http.put<any>(this.api + '/closeCases', data);
    }
    avlCases() {
        return this.http.get(this.api + '/avlCases/');
    }
    filCases() {
        return this.http.get(this.api + '/filCases');
    }
    clsCases() {
        return this.http.get(this.api + '/clsCases');
    }
    sarCases(data) {
        return this.http.get(this.api + '/crtCsSar/' + data);
    }
    getlovs() {
        return this.http.get<any>(this.api + '/lovs');
    }
}
