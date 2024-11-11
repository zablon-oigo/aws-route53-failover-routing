## AWS Route53 Failover Routing
Failover routing enables you to route traffic to a resource when it is healthy or to an alternative resource when the primary resource becomes unhealthy. Primary and secondary records can route traffic to anything from an Amazon S3 bucket configured as a website to a complex hierarchy of records.

In this setup, I deployed two instances across different Availability zones, also configured my domain so that if the website in the primary availability zone became unavailable, amazon Route 53 automatically redirects traffic to the instance in the secondary availability zone. Configured Route 53 health check that sends email alerts when the health of an HTTP endpoint becomes unhealthy. Route 53 periodically checks the site’s health by requesting the domain name and confirming a successful response.

### Architecture Diagram

![route53](https://github.com/user-attachments/assets/0e623df0-380c-4dc2-bc0e-5a35855aa291)

**Steps I Took to Set This Up:**
1. Created a Route 53 health check to monitor the primary endpoint.
2. Configured AWS SNS notifications to get real-time email alerts.
3. Set up Route 53 DNS records to enable automated failover.
4. Created an A record for the secondary instance
