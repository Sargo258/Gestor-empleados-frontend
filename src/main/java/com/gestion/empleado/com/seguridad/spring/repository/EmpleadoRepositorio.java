package com.gestion.empleado.com.seguridad.spring.repository;

import com.gestion.empleado.com.seguridad.spring.models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepositorio extends JpaRepository<Empleado, Long> {

}
