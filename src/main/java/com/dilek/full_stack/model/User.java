package com.dilek.full_stack.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


///eererre
@Entity
@Data
@Getter
@Setter
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private  String name;
    private String email;
//dwşdsldlşsdl

}