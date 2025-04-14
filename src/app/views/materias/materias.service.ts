import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatterModel } from './materia.model';
import { AnnotationModel } from './annotation.model';

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
  deleteMatter(matterId : number): Observable<MatterModel[]>{
    return this.http.delete<MatterModel[]>(this.baseurl + "/" + matterId)
  }
  createMatter(matterName: String): Observable<MatterModel>{
    return this.http.post<MatterModel>(this.baseurl, {"nome" : matterName})
  }
  getAnnotations(matterId: number): Observable<AnnotationModel[]>{
    matterId = matterId + 1
    return this.http.get<AnnotationModel[]>(this.baseurl + "/" + matterId + "/" + "annotations");
  }
}
