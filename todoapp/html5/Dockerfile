from quay.io/linxianer12/apache:1.0.12

EXPOSE 8080
# ไม่รัน user root เพื่อป้องกัน privilege escalation แล้วก้ทำให้ openshift สามารถรันได้เลยอีกด้วย !
# เสียเรื่อง port ต่ำกว่า 1024
copy src /var/www/html

RUN     chgrp -R root /etc/httpd && \
        chgrp -R root  /run/httpd  && \
        chgrp -R root  /var/log/httpd && \
        chmod -R 777  /var/log/httpd && \
        chmod -R 777  /run/httpd && \
        chmod -R 777  /etc/httpd

cmd ["httpd", "-D","FOREGROUND"]
