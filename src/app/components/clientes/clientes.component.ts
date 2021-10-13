import { Component, OnInit } from '@angular/core';
import {Cliente} from "./cliente";
import {ClienteService} from "../../services/cliente.service";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(private ClientesService: ClienteService) { }

  ngOnInit(): void {
    this.ClientesService.getClientes().subscribe((res)=>{
      this.clientes = res;
    })
  }

}
