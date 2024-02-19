# Codecademy Portfolio Project - Appointment Booking App App (Client)

## Description:

This project was completed as part of the Codecademy Full-Stack Engineer course. Specifically, the project covers the final assignment which is to design and develop a PERN application. No further guidance was given. This is the client that accompanies the server _Appointment Booking App_. (This is also a repository on the GitHub site).

The purpose of this project is to provide a client application that exercises the REST API in the partnering project described above. The application includes the following:

> - The ability to register booking clerks for local logins.
> - The ability to logon and logoff using these local accounts.
> - The access to all features (other than registration) should require the booking clerk to be logged in.
> - The application allows appointments to be booked for a set of physiotherapist. These appointments are maintained as a schedule.
> - The schedules from the previous points are held against each physiotherapist, and is possible to switch between schedules by clicking on the physiotherapists card.
> - There is a date time picker that allows the start of the schedule to be set at any point now or in the future.
> - The application allows the selection of treatment types from a dropdown. Each treatment type has a duration which allows calculation of the end time of the appointment.
> - When a new appointment is created, the application checks that it does not create a conflict by overlapping with any existing appointment.
> - When an appointment is created, there is the option to record a patient telephone number and/or email. These are optional but if anything is entered it will be validated.
> - Currently the application prohibits appointments at weekends.
> - Each appointment features an 'Add' button which allows a new appointment to be scheduled immediately after that appointment. This opens an dialogue in which the start time of the new appointment can be changed using a date time picker. Alternatively the immediate start time can be accepted. When this new appointment is created, the application checks that it does not create a conflict by overlapping with any existing appointment.
> - Each appointment feature a "Delete" button that will delete the appointment. There is a modal dialogue that confirm or cancels the deletion of the appointment.
> - All changes are communicated yo a server application using a REST API. These changes are stored n a Postgres database.

### Some implementation details

The application uses the following technologies:

> Nodejs
> React
> Redux tool-kit
> Passport
> Local passport
> Bcrypt
> NPM CORS
> NPM DatePicker

## How to use

This is the client that accompanies the server application _Appointment Booking App (REST API)_. (This is also a repository on the GitHub sit). This application will be unresponsive without an instance of this REST API server. Details of how to configure this application to work with an instance of the API server are given below.

#### Building the application

To begin, this application must be cloned locally from the GitHub. In the project directory the following commands should then be run to build a development version of the application -

> npm install
> npm run start

A production build can be produced by running

> npm run build

### Running with a corresponding REST API server

To configure the application to run with a REST API server, complete the following steps:

In the file src/api/index.js add the following lines -

> export const API_ENDPOINT = {required root URL};
>
> export const CURRENCY = (required currency symbol - probably "£");

Example:

index.js

> export const API_ENDPOINT = "http://localhost:4000";
>
> export const CURRENCY = "£";

### Collaborators

None.

## License

The code in this project can be freely copied and distributed provided the copies bear an appropriate acknowledgement.
