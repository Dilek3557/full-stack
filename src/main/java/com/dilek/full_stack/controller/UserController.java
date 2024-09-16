package com.dilek.full_stack.controller;

import com.dilek.full_stack.model.User;
import com.dilek.full_stack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController{

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/user")
        User newuser(@RequestBody User newuser){
        return userRepository.save(newuser);
        }
        @GetMapping("/users")
        List<User> getAllUsers(){
        return userRepository.findAll();
        }

//deneme commit
    }



