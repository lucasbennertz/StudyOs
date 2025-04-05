import { AnnotationModel } from "./annotation.model";

export interface MatterModel{
    id: String;
    nome: String;
    matterAnnotations?: AnnotationModel[];
}