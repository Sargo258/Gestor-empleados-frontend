package com.gestion.empleado.com.seguridad.spring.controllers;

import com.gestion.empleado.com.seguridad.spring.models.Empleado;
import com.gestion.empleado.com.seguridad.spring.repository.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController  
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoControlador {

    @Autowired
    private EmpleadoRepositorio Repisitorio;
    @GetMapping("/empleados")
    public List<Empleado> listarTodosLosEmpleados(){
        return Repisitorio.findAll();
    }
}
