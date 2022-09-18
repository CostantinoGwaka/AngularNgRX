import { createAction, props } from '@ngrx/store';
import { Books } from './books.model';
 
export const invokeBooksAPI = createAction(
  '[Books API] Invoke Books Fetch API'
);
 
export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch API Success',
  props<{ allBooks: Books[] }>()
);