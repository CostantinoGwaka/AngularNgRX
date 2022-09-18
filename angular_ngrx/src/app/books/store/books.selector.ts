import { createFeatureSelector } from '@ngrx/store';
import { Books } from './books.model';
 
export const selectBooks = createFeatureSelector<Books[]>('mybooks');