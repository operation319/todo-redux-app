import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';


export const initialState: filtrosValidos = 'todas';



// tslint:disable-next-line: variable-name
const _filtroReducer = createReducer(initialState,
  on( setFiltro, (state: filtrosValidos, { filtro }) => filtro ),
);


// tslint:disable-next-line: typedef
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
