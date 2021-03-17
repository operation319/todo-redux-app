import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todas';
  filtros: actions.filtrosValidos[] = ['todas', 'activas', 'completadas'];

  // tslint:disable-next-line: no-inferrable-types
  pendientes: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {


   // tslint:disable-next-line: deprecation
   this.store.subscribe(state => {

    this.filtroActual = state.filtro;
    this.pendientes = state.todos.filter( todo => !todo.completado ).length;

   });

  }

  // tslint:disable-next-line: typedef
  cambiarFiltro( filtro: actions.filtrosValidos ) {

  this.store.dispatch( actions.setFiltro({ filtro }) );

  }

  // tslint:disable-next-line: typedef
  limpiarCompletados() {
    this.store.dispatch ( limpiarTodos() );
  }

}
