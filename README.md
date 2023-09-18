# lms-front
Learning system managment using Angular

## Requirements

For building and running the application you need:

- [Angular cli 11]
- [Node > 10]

## Steps to run
1. Build the project using
  `npm install`
2. Run using
  `ng serve`
3. The web application is accessible via http://localhost:4200
4. Use username and password as 'admin' to log as admin user

## Documentation
Acess the swagguer documentation via http://localhost:8080/swagger-ui/index.html
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Features
- [x] Students shall be able to self-register by providing basic demographic information and contact information
- Student shall be a minimum of 16 years old
- Student shall not be able to register more than once with the same email address
- First name, last name, DOB, address, email, phone number are mandatory

- [x] An administrator shall be able to create/set up a set of courses
Business Rules:
- Course name shall be unique
- Only administrator will have access to course management
- Course shall be completed within 6 months of start date
- [x] Student shall be able to select and start the learning process
Business Rules:

- [x] Student shall not be able to register/select more than three courses at a time
  
  ## Unfinished features

- [] Student shall be able to log the hours for the day by entering:
- [] Student shall be able to log multiple hours for the same day
- [] Student should be able to update and delete a log.
