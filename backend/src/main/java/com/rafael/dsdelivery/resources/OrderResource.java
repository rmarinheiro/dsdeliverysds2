package com.rafael.dsdelivery.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafael.dsdelivery.dto.OrderDTO;
import com.rafael.dsdelivery.dto.ProductDTO;
import com.rafael.dsdelivery.services.OrderService;
import com.rafael.dsdelivery.services.ProductService;

@RestController
@RequestMapping(value = "/orders")
public class OrderResource {
	
	@Autowired
	private OrderService orderService;
	
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll(){
		List< OrderDTO > list = orderService.findAll();
		return ResponseEntity.ok().body(list);
	}

}
