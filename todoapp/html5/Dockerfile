from quay.io/linxianer12/apache:1.0.15

EXPOSE 8080
# ไม่รัน user root เพื่อป้องกัน privilege escalation แล้วก้ทำให้ openshift สามารถรันได้เลยอีกด้วย !
# เสียเรื่อง port ต่ำกว่า 1024
copy src /var/www/html

cmd ["httpd", "-D","FOREGROUND"]
