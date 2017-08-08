package com.hc.demo.products.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ProductService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    public ProductService() {
        logger.info("Init Product Service");
    }

    public String creteProduct() {
        logger.info("Product Service Creating a product");
        return "Product Created";
    }

    public String getAllProducts() {
        logger.info("Product Service Get all products");
        return "Get All Products";
    }

}
