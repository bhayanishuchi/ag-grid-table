import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegulatoryService {
  api = environment.apiAddress;

  constructor(private http: HttpClient) {
  }

  getReports() {
    return this.http.get(this.api + '/regs');
  }
  sarRegulatory(data) {
    return this.http.get(this.api + '/sar/' + data);
  }
}
