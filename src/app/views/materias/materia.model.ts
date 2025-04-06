import { AnnotationModel } from "./annotation.model";

export interface MatterModel{
    id: string;
    nome: string;
    matterAnnotations?: AnnotationModel[];
}