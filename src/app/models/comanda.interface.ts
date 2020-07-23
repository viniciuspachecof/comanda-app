import { ComandaProduto } from './comandasprodutos';

export interface Comanda {
    id?: number;
    numero_comanda: number;
    comandasprodutos: ComandaProduto[];
    quantidade: number;
};