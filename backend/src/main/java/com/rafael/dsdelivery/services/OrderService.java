package com.rafael.dsdelivery.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafael.dsdelivery.dto.OrderDTO;
import com.rafael.dsdelivery.dto.ProductDTO;
import com.rafael.dsdelivery.entities.Order;
import com.rafael.dsdelivery.entities.Product;
import com.rafael.dsdelivery.repositories.OrderRepository;
import com.rafael.dsdelivery.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = orderRepository.findOrdersWithProducts();
		
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
		
	}

}
