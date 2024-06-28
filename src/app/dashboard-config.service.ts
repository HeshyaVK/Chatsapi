import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardConfigService {


  private apiUrl = 'https://localhost:7041/api/DashboardConfig'; 

  constructor(private http: HttpClient) { }

  getWidgets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // private configUrl = 'http://localhost:3000/chart';
  // private dataUrl = 'http://localhost:3000/chartData';

  // constructor(private http: HttpClient) {}

  // getConfig(): Observable<any[]> {
  //   return forkJoin({
  //     configs: this.http.get<any[]>(this.configUrl),
  //     data: this.http.get<any[]>(this.dataUrl)
  //   }).pipe(
  //     map(results => {
  //       const configs = results.configs;
  //       const data = results.data;
  //       configs.forEach(config => {
  //         config.data = data.find(d => d.id === config.dataId);
  //       });
  //       return configs;
  //     })
  //   );
  // }


  }
  
  

