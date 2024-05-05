import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoComponent } from './empleado/empleado.component';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // url obtiene el listado de todos lo empleados en el back
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  // este metodo sirve para optener los empleados
  obtenerListaDeEmpleado():Observable<EmpleadoComponent[]>{
    return this.httpClient.get<EmpleadoComponent[]>(`${this.baseURL}`);
  }

}
