import { Categoria } from './categoria.interface';


export interface Produto {
    id?: number;
    nome: string;
    valor: number;
    observacao: string;
    categoria: Categoria[];
};