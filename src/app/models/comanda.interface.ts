import { Produto } from './produto.interface';
import { ComandaProduto } from './comandasprodutos';

export interface Comanda {
    id?: number;
    numero: number;
    comandasprodutos: ComandaProduto[];
    qtde: number;
};