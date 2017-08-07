package com.hc.demo.products.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.Observable;

@Service
public class ProductService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public ProductService() {
        logger.info("Init Product Service");
    }

    public Observable<String> creteProduct() {
        logger.info("Product Service Creating a product");
        return Observable.<String>create(s -> {
            try {
                s.onNext("Product Created");
                s.onCompleted();
            } catch (Exception e) {
                s.onError(e);
            }
        });

    }

    public Observable<String> getAllProducts() {
        logger.info("Product Service Get all products");
        return Observable.<String>create(s -> {
            try {
                s.onNext("Get All Products");
                s.onCompleted();
            } catch (Exception e) {
                s.onError(e);
            }
        });

    }

}
