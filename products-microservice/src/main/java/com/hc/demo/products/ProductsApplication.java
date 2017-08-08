package com.hc.demo.products;

import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.wildfly.swarm.Swarm;
import org.wildfly.swarm.jaxrs.JAXRSArchive;
//import org.wildfly.swarm.topology.TopologyArchive;

import java.net.URL;


public class ProductsApplication {

	public static void main(String[] args) throws Exception {
		URL stageConfig = ProductsApplication.class.getClassLoader().getResource("application.yml");

		Swarm swarm = new Swarm()
				.withStageConfig(stageConfig);
		swarm.start();

		JAXRSArchive archive = ShrinkWrap.create(JAXRSArchive.class);
		archive.addPackage(ProductsApplication.class.getPackage());
		//archive.addAsWebInfResource(new ClassLoaderAsset("META-INF/persistence.xml", ProductsApplication.class.getClassLoader()), "classes/META-INF/persistence.xml");
		archive.addAllDependencies();

		// advertise service
		/*archive.as(TopologyArchive.class).advertise(
				swarm.stageConfig()
						.resolve("service.user.service-name")
						.getValue()
		);*/

		swarm.deploy(archive);
	}


}
