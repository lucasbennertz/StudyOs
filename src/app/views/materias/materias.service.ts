import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatterModel } from './materia.model';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  baseurl: string = "http://localhost:8080/matters";
  constructor(private http: HttpClient) {}

  readMatter(): Observable<MatterModel[]>{
    return this.http.get<MatterModel[]>(this.baseurl);
  }
  changeName(matterId : number, newMatterName: string): Observable<MatterModel>{
    return this.http.put<MatterModel>(this.baseurl + "/" + matterId, {"nome" : newMatterName});
  }
}
