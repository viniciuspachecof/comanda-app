import { Categoria } from './categoria.interface';


export interface Produto {
    id?: number;
    prod_nome: string;
    prod_preco: number;
    categoria: Categoria[];
};