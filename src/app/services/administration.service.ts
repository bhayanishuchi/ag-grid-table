import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  api = environment.apiAddress;

  constructor(private http: HttpClient) {
  }

  getScenario() {
    return this.http.get(this.api + '/scns');
  }

  getdtlScenario(id) {
    return this.http.get(this.api + '/scn/' + id);
  }

  getActivate(data) {
    return this.http.patch<any>(this.api + '/actScns' , data);
  }
  getDeactivate(data) {
    return this.http.patch<any>(this.api + '/dactScns' , data);
  }

}
