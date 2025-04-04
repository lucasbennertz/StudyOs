import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasServiceService {
  baseurl: string = "http://localhost:3000";
  constructor(private http: HttpClient) {}
  getMaterias(){
    this.http.get("${this.baseurl}/matters")
  }
}
