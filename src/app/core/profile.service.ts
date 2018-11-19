import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  uri = 'http://localhost:4200/profile';

  constructor(private http: HttpClient) { }

  addProfile(name, age) {
    const obj = {
      name: name,
      age: age
    };

    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe( res => console.log('Done'));
  }
}
