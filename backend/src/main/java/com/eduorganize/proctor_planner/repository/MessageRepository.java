package com.eduorganize.proctor_planner.repository;

import com.eduorganize.proctor_planner.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}