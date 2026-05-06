const services = {
    aws: {
        Compute: "EC2",
        Storage: "S3",
        Database: "RDS",
        Network: "VPC"
    },
    gcp: {
        Compute: "Compute Engine",
        Storage: "Cloud Storage",
        Database: "Cloud SQL",
        Network: "VPC"
    },
    azure: {
        Compute: "Virtual Machines",
        Storage: "Blob Storage",
        Database: "SQL Database",
        Network: "VNet"
    }
};
const pricing = {
    aws: { compute: 0.1, storage: 0.02 },
    gcp: { compute: 0.09, storage: 0.025 },
    azure: { compute: 0.11, storage: 0.018 }
};
function getServices(provider) {
    return services[provider];
}
function calculate(provider, hours, storage) {
    const p = pricing[provider];
    return (hours * p.compute + storage * p.storage).toFixed(2);
}
module.exports = { getServices, calculate };