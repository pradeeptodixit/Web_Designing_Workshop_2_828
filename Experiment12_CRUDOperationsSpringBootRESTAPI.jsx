Steps to Create Project using Spring Initializr
Go to:
https://start.spring.io
Project Configuration:
Field Value
Project Maven
Language Java
Spring Boot Latest
Group com.example
Artifact employeeapi
Java 17
Dependencies:
Spring Web
Spring Data JPA
H2 Database
Click Generate.
Import Project in Eclipse IDE
1. Open Eclipse
2. Click
Testing API using Postman
Open postman
Create Employee (POST)
Body
{
"id":1,
"name":"Pranshi Verma",
"department":"IT",
"salary":50000
}
Delete Employee