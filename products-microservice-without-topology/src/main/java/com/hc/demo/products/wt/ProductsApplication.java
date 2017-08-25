package com.hc.demo.products.wt;

import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.wildfly.swarm.Swarm;
import org.wildfly.swarm.jaxrs.JAXRSArchive;
import org.wildfly.swarm.topology.TopologyArchive;

import java.net.URL;


public class ProductsApplication {

	public static void main(String[] args) throws Exception {
		Swarm swarm = new Swarm();

		JAXRSArchive archive = ShrinkWrap.create(JAXRSArchive.class);
		archive.addPackage(ProductsApplication.class.getPackage());
		archive.addAllDependencies();

		// advertise service
		archive.as(TopologyArchive.class).advertise(
				swarm.configView()
						.resolve("service.user.service-name")
						.getValue()
		);

		swarm.start().deploy(archive);
	}


}
