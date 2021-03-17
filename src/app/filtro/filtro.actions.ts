import { createAction, props } from '@ngrx/store';


export type filtrosValidos = 'todas' | 'activas' | 'completadas';

export const setFiltro = createAction(
  '[Filtro] Set Filtro', props<{ filtro: filtrosValidos }>()
  );
