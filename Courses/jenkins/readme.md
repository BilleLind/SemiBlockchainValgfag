Jenkins

docker run -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts


-p 8080:8080 => exposes 8080, by default runs on this port

-p 50000:50000 => Master/slave Communication

-d => runs in detached mode

-v jenkins_home:/var/jenkins_home => bind named volume / persist data of jenkins 

jenkins/jenkins:lts => the docker jenkins/jenkins / lts => latest (tag)