package com.hc.demo.products.wt.api;

import com.hc.demo.products.wt.services.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@ApplicationScoped
@Path("/products")
public class ProductController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Inject
    private ProductService productService;

    private ExecutorService mtf = null;

    @PostConstruct
    private void init() {
        logger.info("Init Product Controller");

        mtf = Executors.newFixedThreadPool(1);
    }

    @PreDestroy
    private void destroy() {
        mtf.shutdownNow();
    }

    @Path("/")
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public void create(@Suspended final AsyncResponse response) {
        logger.info("Creating Product");
        mtf.execute(() -> response.resume(productService.creteProduct()));
    }

    @Path("/")
    @GET
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public void getAll(@Suspended final AsyncResponse response) {
        logger.info("Get All Product");
        mtf.execute(() -> response.resume(productService.getAllProducts()));
    }
}
