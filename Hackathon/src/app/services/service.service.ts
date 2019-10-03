import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StuffService {

  constructor(private http: HttpClient) { }

  getstuff() {
    return this.http.get('http://localhost:6969/getAllCMInfo').pipe(map(responseData => {
      console.log('connecting...');
      const postArray: any[] = [];
      for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key});
          }
      }
      return postArray;
  }));
  }
  poststuff(data: any) {
    return this.http.post('http://localhost:6969/postCMInfo', data);
  }
  postActOnApplication(data) {
    console.log(data);
    return this.http.post('http://localhost:6969/actOnApplication', data);
  }
}
