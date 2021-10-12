import { Component, OnInit } from '@angular/core';
import {Cliente} from "./cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 0, nombre: 'Alberto', apellido:'Marti', date:'2019-01-25', email:'yqsetio@gmail.com'},
    {id: 1, nombre: 'Ana', apellido:'Turis', date:'2019-01-25', email:'yqsetio@gmail.com'},
    {id: 2, nombre: 'Alvaro', apellido:'Cabezon', date:'2019-01-25', email:'yqsetio@gmail.com'},
    {id: 3, nombre: 'Antonio', apellido:'Uranio', date:'2019-01-25', email:'yqsetio@gmail.com'},
    {id: 4, nombre: 'Raquel', apellido:'Palurda', date:'2019-01-25', email:'yqsetio@gmail.com'},
    {id: 5, nombre: 'Ester', apellido:'Estrella', date:'2019-01-25', email:'yqsetio@gmail.com'},
    {id: 6, nombre: 'Laura', apellido:'Ortera', date:'2019-01-25', email:'yqsetio@gmail.com'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
