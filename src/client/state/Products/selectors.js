import { NAME } from 'STATE/Products/constants';

export const getProducts = state => state[NAME].products || [];
