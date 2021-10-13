import { Injectable } from '@angular/core';
import {clientes} from "../components/clientes/clientes.json";
import {Cliente} from "../components/clientes/cliente";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{
    return of(clientes);
  }
}
