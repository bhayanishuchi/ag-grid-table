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
    return this.http.get(this.api + '/dtlsAlert/' + id);
  }

  uploadFile(id, data) {
    return this.http.post(this.api + '/upload/' + id, data);
  }

  addAltComment(data) {
    return this.http.post(this.api + '/addAlCmnt/', data);
  }

  getNewAlert(id) {
    return this.http.get(this.api + '/myAlerts/' + id);
  }

  getcheckin(data) {
    return this.http.put(this.api + '/cinAlerts' , data);
  }

  putroute(data) {
    return this.http.put(this.api + '/rteAlerts' , data);
  }
  putclose(data) {
    return this.http.put(this.api + '/closeAlerts' , data);
  }

  putSuppress(data) {
    return this.http.put(this.api + '/supAlerts' , data);
  }
  putaddtocase(caseId, data) {
    return this.http.put(this.api + '/addAlsCas/' + caseId, data);
  }



}
