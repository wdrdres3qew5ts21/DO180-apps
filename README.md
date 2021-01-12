# DO180-apps
DO180 Repository for Sample Applications
Build Strategy  

New-App ผ่าน Source Code และสั่งให้ Openshift Build ระบบ


# Create a Ruby application based on the provided [image]~[source code] combination
```
oc new-app centos/ruby-25-centos7~https://github.com/sclorg/ruby-ex.git

oc new-app --as-deployment-config \
 docker.io/php:7.3.26-stretch~https://github.com/RedHatTraining/DO180-apps \
 --context-dir php-helloworld --name php-helloworld


oc new-app --as-deployment-config  https://github.com/wdrdres3qew5ts21/DO180-apps  --context-dir nodejs-docker --name nodejs-docker--strategy=docker

podman build -t nodejs-docker -f nodejs-docker/Dockerfile

podman run -p 9999:8080 nodejs-docker
```

เรามี build ได้สองแบบคือการใช้ strategy base image เป็น docker ถ้าไม่ระบุมันจะไปเอาของ Red Hat มา Build แทนและถ้าไม่เสียเงินก็จะทำไมไ่ด้

ซึ่งให้ลองสังเกตเพิ่มเติมว่า BuildConfig ไป Trigger สร้างการ Build จริงๆและด้วยการใช้ Strategy เป็น Docker นั้นเราจะไม่มีทางรู้ได้เลยว่าจะ Build ยังไงเราก็แก้ได้ด้วยการใช้ Dockerfile แทน S2I นั่นเอง

Multi Stage ใช้งานได้แต่ต้องแยก Based Image ออกจากกันไม่สามารถใช้ From ตรงๆได้เลยแต่แรกเพราะ Openshift มันต้องเอาไป Build ก่อน
สั่ง Build ผ่าน Command Line ได้ โดยการระบุ build config

oc start-build nodejs-docker


oc new-app https://github.com/wdrdres3qew5ts21/DO180-apps --context-dir=todoapp/html5    --name  todoapp-enlightment --strategy=docker

oc new-app https://github.com/wdrdres3qew5ts21/DO180-apps --context-dir=todoapp/nodejs_api   --name  backend-api -e


# Image Version เสถียรใช้ได้จริงคือ
quay.io/linxianer12/apache:1.0.15
โดย image นี้จะตาม Best Pracetice ที่ทำได้ของ Openshift ไม่มีการรัน Container ด้วย Root user 
```
sh-4.2$ ls -alZ /run/httpd
drwxrwxrwx. apache     apache system_u:object_r:container_file_t:s0:c27,c53 .
drwxr-xr-x. root       root   system_u:object_r:container_file_t:s0:c27,c53 ..
-rw-r--r--. 1002810000 root   system_u:object_r:container_file_t:s0:c27,c53 authdigest_shm.1
drwxrwxrwx. apache     apache system_u:object_r:container_file_t:s0:c27,c53 htcacheclean
-rw-r--r--. 1002810000 root   system_u:object_r:container_file_t:s0:c27,c53 httpd.pid
sh-4.2$ 
sh-4.2$ ls -alZ /var/log/httpd/
drwxrwxrwx. apache     apache system_u:object_r:container_file_t:s0:c27,c53 .
drwxr-xr-x. root       root   system_u:object_r:container_file_t:s0:c27,c53 ..
-rw-r--r--. 1002810000 root   system_u:object_r:container_file_t:s0:c27,c53 access_log
-rw-r--r--. 1002810000 root   system_u:object_r:container_file_t:s0:c27,c53 error_log
sh-4.2$ 
sh-4.2$ ls -alZ /etc/httpd/
conf/           conf.d/         conf.modules.d/ logs/           modules/        run/            
sh-4.2$ ls -alZ /etc/httpd/
drwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 .
drwxr-xr-x. root root system_u:object_r:container_file_t:s0:c27,c53 ..
drwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 conf
drwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 conf.d
drwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 conf.modules.d
lrwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 logs -> ../../var/log/httpd
lrwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 modules -> ../../usr/lib64/httpd/modules
lrwxrwxrwx. root root system_u:object_r:container_file_t:s0:c27,c53 run -> /run/httpd
```
