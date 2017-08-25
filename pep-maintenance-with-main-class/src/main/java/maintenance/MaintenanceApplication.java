package maintenance;

import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.wildfly.swarm.Swarm;
import org.wildfly.swarm.topology.TopologyArchive;
import org.wildfly.swarm.undertow.WARArchive;

import java.net.URL;

public class MaintenanceApplication {

    public static void main(String[] args) throws Exception {

        Swarm swarm = new Swarm();

        WARArchive archive = ShrinkWrap.create(WARArchive.class);
        archive.addPackage(MaintenanceApplication.class.getPackage());
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
