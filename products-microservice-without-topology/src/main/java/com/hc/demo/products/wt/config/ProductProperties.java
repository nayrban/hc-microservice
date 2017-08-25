package com.hc.demo.products.wt.config;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.wildfly.swarm.spi.runtime.annotations.ConfigurationValue;

@ApplicationScoped
public class ProductProperties {

    @Inject
    @ConfigurationValue("client.products-service.url")
    private String productURL;

    @Inject
    @ConfigurationValue("client.products-service.api")
    private String productApi;

    @Inject
    @ConfigurationValue("client.products-service.path")
    private String productPath;


    public String getProductURL() {
        return productURL;
    }

    public void setProductURL(String productURL) {
        this.productURL = productURL;
    }

    public String getProductApi() {
        return productApi;
    }

    public void setProductApi(String productApi) {
        this.productApi = productApi;
    }

    public String getProductPath() {
        return productPath;
    }

    public void setProductPath(String productPath) {
        this.productPath = productPath;
    }

    @Override
    public String toString() {
        return "ProductProperties{" +
                "productURL='" + productURL + '\'' +
                ", productApi='" + productApi + '\'' +
                ", productPath='" + productPath + '\'' +
                '}';
    }
}
