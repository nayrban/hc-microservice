package com.hc.demo.products.wt.services;

import com.hc.demo.products.wt.config.ProductProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;

@ApplicationScoped
public class ProductService {

    @Inject
    private ProductProperties productProperties;

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

        return ClientBuilder.newClient().target(productProperties.getProductURL())
                .path(productProperties.getProductApi())
                .path(productProperties.getProductPath())
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(String.class);
    }
}