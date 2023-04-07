# FinTrack

Website to publish excel spread sheet for managing finances.

#Backend
Architecture
https://github.com/geshan/expressjs-structure
Configs

- keeps all the configs needed for the application
  Controllers
- get the request from the routes and convert them to http responses with the use of any middlewares as necessary
  Middlewares
- authentication, logging, or any other purpose
  Routes
- will have a single file for each logical set of routes
  Models
- data models required for the application
  Services
- all the business logic, can have services that represent business objects and can run queries on the database
  Utils
- will have all the utilities and helpers needed for the application
  Schema Validation
- schema validation is done using body-parser and jsonschema, stored in the middleware
  https://snowball.digital/blog/validating-rest-endpoints-with-json-schemas-using-express-and-node-js

Tutorial planning to follow to integrate paypal:
https://www.nodejsera.com/paypal-payment-integration-using-nodejs-part1.html
