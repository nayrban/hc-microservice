package com.hc.demo.products.common;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.springframework.web.context.request.async.DeferredResult;

public class LoggableDeferredResult<T> extends DeferredResult<T> {

	@Override
    public String toString() 
	{
		Object result = this.getResult();
		
		return new ToStringBuilder(this).
			       append("Result", result != null ? this.getResult().toString() : "null").
			       toString();
    }
}