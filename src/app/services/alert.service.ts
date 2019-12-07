import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  api = environment.apiAddress;
  constructor(private http: HttpClient) { }

  getMyAlert(id) {
    return this.http.get(this.api + '/myAlerts/' + id);
  }

  getAvailAlert() {
    return this.http.get(this.api + '/avlalerts');
  }

  getClosedAlert() {
    return this.http.get(this.api + '/clsAlerts');
  }

  getSuppressedAlert() {
    return this.http.get(this.api + '/suppAlerts');
  }

  getDetailAlert(id) {
    return this.http.get<any>(this.api + '/dtlsAlert/' + id);
  }

  uploadFile(id, data) {
    return this.http.post<any>(this.api + '/upload/' + id, data);
  }

  addAltComment(data) {
    return this.http.post<any>(this.api + '/addAlCmnt/', data);
  }

  getNewAlert(id) {
    return this.http.get(this.api + '/myAlerts/' + id);
  }

  getcheckin(data) {
    return this.http.put<any>(this.api + '/cinAlerts' , data);
  }
  getcheckout(data) {
    return this.http.put<any>(this.api + '/coutAlerts' , data);
  }

  putroute(data) {
    return this.http.put<any>(this.api + '/rteAlerts' , data);
  }
  putclose(data) {
    return this.http.put<any>(this.api + '/closeAlerts' , data);
  }

  putSuppress(data) {
    return this.http.put<any>(this.api + '/supAlerts' , data);
  }

  putaddtocase(caseId, data) {
    return this.http.put<any>(this.api + '/addAlsCase/' + caseId,  data);

  }
  putaddtoNewcase(data) {
    return this.http.put<any>(this.api + '/crtAlCase', data);
  }

  getusers() {
    return this.http.get<any>('https://devamlapi.azurewebsites.net/users');
  }

  getlovs() {
    return this.http.get<any>(this.api + '/lovs');
  }
  getmycase(caseId) {
    return this.http.get<any>(this.api + '/myCases/' + caseId);

  }
  getActive(data) {
    return this.http.put<any>(this.api + '/reoAlerts', data);

  }



}
