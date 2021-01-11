from ubi7/ubi:7.7

env PORT=8080

EXPOSE ${PORT}
# ไม่รัน user root เพื่อป้องกัน privilege escalation แล้วก้ทำให้ openshift สามารถรันได้เลยอีกด้วย !
# เสียเรื่อง port ต่ำกว่า 1024

RUN yum install httpd -y && yum clean all -y && \
        sed -i -e "s/Listen 80/Listen ${PORT}/g"  /etc/httpd/conf/httpd.conf && \
        chown  apache:apache -R /etc/httpd/logs/ 

copy src /var/www/html

cmd ["httpd", "-D","FOREGROUND"]
