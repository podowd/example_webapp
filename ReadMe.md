It is assumed java, maven and tomcat are installed on your dev machine.

The web app is built and deployed to tomcat using maven. It is presumed you have configured maven to deploy to the required tomcat server. To build and deploy the war, run the following command from the project directory:
mvn tomcat7:redeploy

After deploying the war to tomcat - the web app can be accessed using the following url (provided your tomcat server is using the default port):
http://localhost:8080/example

The web app was developed with the following technologies:
1 AngularJS
2 Jersey Java API for restful services