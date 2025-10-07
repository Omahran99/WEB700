/********************************************************************************
*  WEB700 – Assignment 1

*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:

*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html

*  Name: Omar Mahran
*  Student ID: 176603231
*  Date: 10/07/2025
********************************************************************************/


/*
  STEP 3
*/
const serverMethods = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverRoutes  = [   "/", "/store", "/store-admin", "/register", "/developer", "/login"];
const serverResponses = [
  "Home",
  "Main Storefront",
  "Manage Products",
  "Registered New User",
  "Developed by:  Omar Mahran: omomahran@myseneca.ca",
  "User Logged In"
];


/*
  STEP 4
*/
function processRequest(method, route) {
  for (let i = 0; i < serverRoutes.length; i++) {
     if (serverMethods[i] === method && serverRoutes[i] === route) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${method} request for ${route}`;
}


/*
  STEP 5
*/
console.log(processRequest("GET", "/"));           
console.log(processRequest("GET", "/developer"));  
console.log(processRequest("POST", "/register"));  
console.log(processRequest("POST", "/"));          

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


/*
  STEP 6
*/
function testRequests() {
  const testMethods = ["GET", "POST"];
  const testRoutes = [
    "/", "/store", "/store-admin", "/register",
    "/developer", "/login", "/notFound1", "/notFound2"
  ];

  function randomRequest() {
    const randMethod = testMethods[getRandomInt(testMethods.length)];
    const randRoute  = testRoutes[getRandomInt(testRoutes.length)];
    console.log(processRequest(randMethod, randRoute));
  }

  setInterval(randomRequest, 1000); 
}


/*
  STEP 7
*/
testRequests();