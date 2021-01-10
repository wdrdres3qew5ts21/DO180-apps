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

 
oc new-app --as-deployment-config  docker.io/php:7.3.26-stretch~https://github.com/wdrdres3qew5ts21/DO180-apps  --context-dir php-helloworld --name php-helloworld --strategy=docker
```

เรามี build ได้สองแบบคือการใช้ strategy base image เป็น docker ถ้าไม่ระบุมันจะไปเอาของ Red Hat มา Build แทนและถ้าไม่เสียเงินก็จะทำไมไ่ด้

ซึ่งให้ลองสังเกตเพิ่มเติมว่า BuildConfig ไป Trigger สร้างการ Build จริงๆและด้วยการใช้ Strategy เป็น Docker นั้นเราจะไม่มีทางรู้ได้เลยว่าจะ Build ยังไงเราก็แก้ได้ด้วยการใช้ Dockerfile แทน S2I นั่นเอง
