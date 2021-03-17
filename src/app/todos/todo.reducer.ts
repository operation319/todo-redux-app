import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';


export const estadoInicial: Todo[] = [
  new Todo(' Salvar al mundo '),
  new Todo(' Vencer a Thanos '),
  new Todo(' Comprar traje de Ironman '),
  new Todo(' Robar escudo del Capitán América '),
];


// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estadoInicial,
  on( crear, (state, { texto }) => [...state, new Todo( texto )] ),

  on( limpiarTodos, state => state.filter( todo => !todo.completado )  ),

  on ( borrar, ( state, { id } ) => state.filter( todo => todo.id !== id ) ),

  on ( toggleAll, ( state, { completado } ) => state.map( todo => {

    return {
      ...todo,
      // tslint:disable-next-line: object-literal-shorthand
      completado: completado
    };

  } )  ),

  on(toggle, (state, { id }) => {

    return state.map( todo => {

      if ( todo.id === id ) {
      return {
        ...todo,
        completado: !todo.completado
      // tslint:disable-next-line: semicolon
      }
    } else {
      return todo;
    }

    });
  }),

  on(editar, (state, { id, texto }) => {

    return state.map( todo => {

      if ( todo.id === id ) {
      return {
        ...todo,
       // tslint:disable-next-line: object-literal-shorthand
       texto: texto
      // tslint:disable-next-line: semicolon
      }
    } else {
      return todo;
    }

    });
  }),

);


// tslint:disable-next-line: typedef
export function todoReducer(state, action) {
  return _todoReducer(state, action);

}
