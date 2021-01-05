package com.rafael.dsdelivery.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafael.dsdelivery.dto.ProductDTO;
import com.rafael.dsdelivery.entities.Product;
import com.rafael.dsdelivery.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product> list = productRepository.findAllByOrderByNameAsc();
		
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
		
	}

}
