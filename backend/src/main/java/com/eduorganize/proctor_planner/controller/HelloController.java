package com.eduorganize.proctor_planner.controller;

import com.eduorganize.proctor_planner.model.Message;
import com.eduorganize.proctor_planner.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  // For local development if needed
public class HelloController {

    @Autowired
    private MessageRepository messageRepository;

    // Initialize the database with a default message
    @PostConstruct
    public void init() {
        if (messageRepository.count() == 0) {
            Message message = new Message("Hello World from Spring Boot & PostgreSQL!");
            messageRepository.save(message);
        }
    }

    @GetMapping("/hello")
    public String hello() {
        Optional<Message> msg = messageRepository.findAll().stream().findFirst();
        return msg.map(Message::getContent).orElse("Hello World!");
    }
}
