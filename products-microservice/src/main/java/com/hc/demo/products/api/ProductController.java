package com.hc.demo.products.api;

import com.hc.demo.products.common.LoggableDeferredResult;
import com.hc.demo.products.services.ProductService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

@Controller
@RequestMapping("/products")
public class ProductController {
    private  Logger logger = LoggerFactory.getLogger(this.getClass());

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        logger.info("Init Product Controller");

        this.productService = productService;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    @ApiOperation(
            value = "Get User Profile Information",
            notes = "On App: is used in several places, Personal Information Screen, On Base Activity if there "
                    + "is not profile info stored on the device the app calls the service to get the profile info and stored in shared preferences.")
    @ApiResponse(code = 200, message = "OK")
    public DeferredResult<String> create(){
        logger.info("Creating Product");
        DeferredResult<String> result = new LoggableDeferredResult<>();

        productService.creteProduct().subscribe(m -> result.setResult(m),
                e -> result.setErrorResult(e));

        return result;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(
            value = "Get User Profile Information",
            notes = "On App: is used in several places, Personal Information Screen, On Base Activity if there "
                    + "is not profile info stored on the device the app calls the service to get the profile info and stored in shared preferences.")
    @ApiResponse(code = 200, message = "OK")
    public DeferredResult<String> getAll(){
        logger.info("Get All Product");
        DeferredResult<String> result = new LoggableDeferredResult<>();

        productService.getAllProducts().subscribe(m -> result.setResult(m),
                e -> result.setErrorResult(e));

        return result;
    }
}
