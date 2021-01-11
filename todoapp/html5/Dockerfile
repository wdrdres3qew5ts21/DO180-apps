FROM registry.redhat.io/ubi8/ubi
RUN yum install httpd -y && yum clean all -y
WORKDIR /var/www/html
COPY src/ /var/www/html
ENTRYPOINT [ "httpd", "-D","FOREGROUND" ]

