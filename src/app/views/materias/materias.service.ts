import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatterModel } from './materia.model';
import { AnnotationModel } from './annotation.model';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  annotationUrl: string =
    'https://api-annotationsbymatters.railway.internal/annotations';
  mattersUrl: string = 'https://api-annotationsbymatters.railway.internal/matters';
  constructor(private http: HttpClient) {}

  readMatter(): Observable<MatterModel[]> {
    return this.http.get<MatterModel[]>(this.mattersUrl);
  }
  changeMatterName(
    matterId: string,
    newMatterName: string
  ): Observable<MatterModel> {
    return this.http.put<MatterModel>(this.mattersUrl + '/' + matterId, {
      nome: newMatterName,
    });
  }
  deleteMatter(matterId: string): Observable<MatterModel[]> {
    return this.http.delete<MatterModel[]>(this.mattersUrl + '/' + matterId);
  }
  createMatter(matterName: String): Observable<MatterModel> {
    return this.http.post<MatterModel>(this.mattersUrl, { nome: matterName });
  }
  getAnnotations(matterId: string): Observable<AnnotationModel[]> {
    return this.http.get<AnnotationModel[]>(
      this.mattersUrl + '/' + matterId + '/' + 'annotations'
    );
  }
  changeAnnotationName(
    annotationId: string,
    newAnnotationName: string
  ): Observable<AnnotationModel> {
    return this.http.put<AnnotationModel>(
      this.annotationUrl + '/' + annotationId + '/' + 'rename',
      { title: newAnnotationName }
    );
  }
  createAnnotation(
    matterId: string,
    annotationName: string,
    annotationDescription: string
  ): Observable<AnnotationModel> {
    return this.http.post<AnnotationModel>(
      this.annotationUrl + '/' + matterId,
      { title: annotationName, description: annotationDescription }
    );
  }
  deleteAnnotation(matterId: string): Observable<AnnotationModel[]> {
    return this.http.delete<AnnotationModel[]>(
      this.annotationUrl + '/' + matterId
    );
  }
}
