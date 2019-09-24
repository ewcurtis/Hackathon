import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StuffService {

  constructor(private http: HttpClient) { }

  getstuff(){
    return this.http.get('http://192.168.1.60:4200/getAllCMInfo')
  }
  poststuff(){
    return this.http.post('http://192.168.1.60:4200/postCMInfo',{hi:"hello"})
  }
  getCMIInfo(){
    return this.http.get('http://192.168.1.60:4200/getCMIInfo')
  }
  postCMIInfo(){
    return this.http.post('http://192.168.1.60:4200/postCMInfo',{hi:"hello"})
}
  getHousingInfo(){
  return this.http.get('http://192.168.1.60:4200/getHousingInfo')
}
  postHousingInfo(){
    return this.http.post('http://192.168.1.60:4200/postHousingInfo',{hi:"hello"})
}
  getEmploymentInfo(){
  return this.http.get('http://192.168.1.60:4200/getEmploymentInfo')
}
  postEmploymentInfo(){
  return this.http.post('http://192.168.1.60:4200/postEmploymentInfo',{hi:"hello"})
}
}
