## database set up 
# in terminal.
- 1-su postgres
- 2-psql postgres
- 3-CREATE USER full_stack_user WITH PASSWORD 'password123';
- 4-CREATE DATABASE storefront_DB;
- 5-CREATE DATABASE storefront_test_DB;
- 6-GRANT ALL PRIVILEGES ON DATABASE storefront_DB TO full_stack_user;
- 7-GRANT ALL PRIVILEGES ON DATABASE storefront_test_DB TO full_stack_user;

## all set up and connection and port in the .env file
- {
- POSTGRES_HOST=localhost
- POSTGRES_DB = storefront_DB
- POSTGRES_TEST_DB = storefront_test_DB
- POSTGRES_USERNAME=full_stack_user
- POSTGRES_PASSWORD=password123
- DB_PORT= 5432
- APP_PORT=3000
}

## API Endpoints
# Products
- Index : GET /products/index
- Show  GET /products/show/:id
- Create  POST  /products/create

# Users
- Index   GET /users/index
- Show   GET  /users/show/:id 
- Create   POST  /users/create

# Orders
- Current Order by user (args: user id)[token required] :GET /orders/userOrders/:id
- Completed Orders by user  GET  /orders/completeduserOrders/:id

## the scripts as shown below
- 1-"testdb" : to begin testing using the test database
- 2-"lint" :to use linter
- 3-"prettier" : to use the prettier
- 4-"start" : to start the app using nodemon
- 5-"down:test" :drop all tables in test database


