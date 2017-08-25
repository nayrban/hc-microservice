var topo = topology();

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>WildFly Swarm Ribbon Example</h1>
                <Topology/>
            </div>
        );
    }
});

var Topology = React.createClass({
    getInitialState: function () {
        return {data: []};
    },

    componentDidMount: function () {
        var component = this;
        topo.onTopologyChange(function (topology) {
            component.setState({data: topology});
        });
    },

    render: function () {
        var services = [];
        for (var service in this.state.data) {
            var addresses = this.state.data[service];
            services.push(
                (
                    <Service service={service} addresses={addresses} key={service}/>
                )
            );
        }
        return (
            <div id='topology'>
                <h2>Service Topology</h2>
                {services}
            </div>
        );
    }
});

var Service = React.createClass({
    render: function () {
        var addresses = this.props.addresses.map(function (address) {
            return (
                <Address address={address} key={address.endpoint}/>
            );
        });

        return (
            <div className='service'>
                <OtherService service={this.props.service} endpoints={addresses}/>
            </div>
        )

    }
});

function formatTime(obj) {
    return obj['h'] + ':' + obj['m'] + ':' + obj['s'] + '.' + obj['ms'] + ' on ' +
        obj['Y'] + '-' + obj['M'] + '-' + obj['D'] + ' ';
}

var OtherService = React.createClass({
    getInitialState: function () {
        return {response: []};
    },

    updatePanel: function (response) {
        console.log(response);
        this.setState({
            response: response
        });
    },

    render: function () {
        return (
            <div className='other-service'>
                <h2>{this.props.service} Service</h2>
                <div className='endpoints'>
                    <h3>Endpoints</h3>
                    {this.props.endpoints}
                </div>
            </div>
        );
    }
});

var Address = React.createClass({
    render: function () {
        return (
            <div>
                <p className='service-address'>{this.props.address.endpoint}</p>
                {this.props.address.tags.map(function (tag) {
                    return (<span key={tag}>{tag}</span>);
                })}
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
