## TASK 06 - VALIDATION AND SANITIZATION

In this task we will introduce data validation. How we will we know that the format of the email the user inserted is valid? Using `express-validator` we will validate our data before we save them in our database. If something is not valid, we will return a detailed error message to the user. After validation, we will sanitize our data using `express-validator`. Validation is about making sure our data are in the right format. Sanitzation though is all about making sure the data are also noise-free. No extra spaces, no uppercase mixed with lowercase, normalized emails etc.

**TODO**

1. Install `express-validator`.
2. Validate data for the user schema.
3. After validation of the data, please sanitize them as well.
4. In the end, please create a custom validation middleware boilerplate and bring all your validators there.

## Task 05 - Mongoose and Controllers

TODO:

1. Please update your record's controller using Mongoose.
2. Make sure all API endpoints for records work as they should.
3. Repeat the process for your users and orders controllers.

## Task 04 - Create schema and model

**TODO:**

1. Please set up mongoose in your server.
2. Create a data schema and a model for our records, users and orders.

## Task 03 - Routing and error handling

As we saw in the first task, there are requests like `GET` and `POST` that define what is the functionality of each endpoint. We will now introduce `PUT` and `DELETE`.

- `PUT` will update an already existing resource
- `DELETE` will delete an already existing resource

After we introduce the above requests for our record store we need to do some error handling. What happens when something goes wrong during a request? We need to let the user know what went wrong in a consistent way. We can achieve that by writing middleware functions that will take care of error responses.

**Story**: Our client, the record store, would like to be able to update and delete records from their store. Except the records data model, our client would like to have two more data models. One for the users and one for the orders.

**TODO**:

1. Please create three more endpoints (routes) for the record data model

   - `records/:id` -> a `GET` that will return a record based on the `id`
   - `records/:id` -> a `PUT` that will update a record based on the `id`
   - `records/:id` -> a `DELETE` that will delete a record based on the `id`

2. Please create endpoints for the users and orders models. A user should contain a first name, a last name, an email, a password. An order should contain a record id and a quantity property. We will later on enrich all models with more properties.

   Users Model

   - `users` -> `GET` all users
   - `users/:id` -> `GET` a user
   - `users` -> `POST` a user
   - `users/:id` -> `PUT` a user
   - `users/:id` -> `DELETE` a user

   Orders Model

   - `orders` -> `GET` all orders
   - `orders/:id` -> `GET` an order
   - `orders` -> `POST` an order
   - `orders/:id`-> `PUT` an order
   - `orders/:id` -> `DELETE` an order

3. Once we make sure all the above work as they should and that our database is being updated correctly, please write a middleware function that will handle errors during the requests.

## Task 02 - Middleware and CORS

Adding middlewares to the express server:

**TODO**:

1. Add following middlewares to your server: `morgan`, `express.json()`, `express.urlencoded()` and `cors()`.

## Task 01 - Mock database and Controllers

Most applications made for the web have to do with some sort of data manipulation. In order to be able to manipulate our data we have to do two things first:

    - We need to define the endpoints of our app that our users will use to send
      different kinds of requests (GET, POST, DELETE, etc).
    - We have to define how do we want our data to look like and of course store them somewhere.

**Story**: Our client is a record shop owner who wants to have a list of products in the main page of their shop. They know that they want to display the title, the artist, the year, the cover image and the price for each record they have available. However, the client still doesn't have a full list of all their products. He would also like to be able to add new records to his collection.

**TODO**:

1. Setup a simple `express` server. In this task-01 you don't need to add middleware and error-handler (You can use ES6 or CommonJS).

2. Please create two endpoints(routes) for the shop owner

   - `api/records` -> a `GET` that will return all records of the store
   - `api/records` -> a `POST` that will add a new record to the record collection

   For now you can just return a string from the above endpoints, just to make sure everything works.

3. Using `lowdb` set up a mock database for our records. It can be empty or it can contain already some fake data. Update the routes above so that they work just like they should.

   - `api/records` -> should return all the records that are in our lowdb database
   - `api/records` -> should add a new record to our lowdb database
