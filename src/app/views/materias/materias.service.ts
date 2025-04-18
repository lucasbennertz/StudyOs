import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatterModel } from './materia.model';
import { AnnotationModel } from './annotation.model';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  annotationUrl: string = "http://localhost:8080/annotations"
  mattersUrl: string = "http://localhost:8080/matters";
  constructor(private http: HttpClient) {}

  readMatter(): Observable<MatterModel[]>{
    return this.http.get<MatterModel[]>(this.mattersUrl);
  }
  changeMatterName(matterId : number, newMatterName: string): Observable<MatterModel>{
    return this.http.put<MatterModel>(this.mattersUrl + "/" + matterId, {"nome" : newMatterName});
  }
  deleteMatter(matterId : number): Observable<MatterModel[]>{
    return this.http.delete<MatterModel[]>(this.mattersUrl + "/" + matterId)
  }
  createMatter(matterName: String): Observable<MatterModel>{
    return this.http.post<MatterModel>(this.mattersUrl, {"nome" : matterName})
  }
  getAnnotations(matterId: number): Observable<AnnotationModel[]>{
    matterId = matterId + 1
    return this.http.get<AnnotationModel[]>(this.mattersUrl + "/" + matterId + "/" + "annotations");
  }
  changeAnnotationName(annotationId: number, newAnnotationName: string): Observable<AnnotationModel>{
    return this.http.put<AnnotationModel>(this.annotationUrl + "/" + annotationId + "/" + "rename", {"title" : newAnnotationName});
  }
}
