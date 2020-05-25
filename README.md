# Mobile

To run client go to /mobile folder
To run expo project run

### npm install
### npm start


Now requests from app go to server that was deployed on Heroku 
To connect app with local BE you should do the following steps:
1. Make sure that app and BE are in the same network
2. Get you local IP address (run 'hostname -I | cut -d' ' -f1' on linux)
3. Replace value of variable appURL with your result from step 3 to  /mobile/src/constants/constants.ts. It should be like 'http://192.168.0.106:4000/' 


# Backend

To run server go to /server folder
To build the project you should add your 
system root password in the docker-compose file
and then run the command 

### sudo docker-compose up --build

then you can make requests to address

### http://localhost:4000/api/

api:

User:

getUsers - get all users
signup - user register 
login - user autorization
forgotPassword - send email to password restore
resetPassword - reset user password 
deleteUser/:userId - delete user


Services:

createService - create new service
services  - get all services
getDryersService/:dryerId - get all service by dryer id
editService - edit service
deleteService - delete service


Orders:

createOrder - create new order
orders - get all orders
myOrders/:userId - get all service by user id
getOrder/:orderId - get order by id
editOrder - edit order
deleteOrder - delete order

Dryers:

createDryer - create new dryer
getDryers - get dryer by id
deleteDryer - delete dryer
