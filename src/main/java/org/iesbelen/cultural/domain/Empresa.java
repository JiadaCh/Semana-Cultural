package org.iesbelen.cultural.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "empresa")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_empresa")
    private long id;

    @Column(unique = true, nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String direccion;

    private String descripcion;

    @Column(nullable = false)
    private String web;

    @Column(nullable = false)
    private String imagen;

    private int anoFundacion;

    @Column(name = "ultima_actualizacion")
    @JsonFormat(pattern = "dd-MM-yyyy-HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private Date ultimaActualizacion;


}