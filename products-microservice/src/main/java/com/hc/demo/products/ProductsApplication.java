package com.hc.demo.products;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ProductsApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(ProductsApplication.class, args);
	}
}
