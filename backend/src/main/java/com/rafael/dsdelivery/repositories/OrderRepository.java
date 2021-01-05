package com.rafael.dsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafael.dsdelivery.entities.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {

}
