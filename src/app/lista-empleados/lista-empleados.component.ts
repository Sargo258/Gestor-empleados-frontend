
import { Component } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  empleados:EmpleadoComponent[];

  constructor(private empleadoServico:EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados()
  }

  //se utiliza para obtener una lista de empleados del servicio empleadoServicio y 
  //asignarla a la variable empleados de la clase ListaEmpleadosComponent. 
  //Utiliza el patrón de programación asincrónica de Angular, 
  //utilizando subscribe() para manejar la respuesta del servicio cuando esté disponible.
  private obtenerEmpleados(){
    this.empleadoServico.obtenerListaDeEmpleado().subscribe(dato => {
      console.log(dato);
      this.empleados = dato;
    })
  }

  
}
