<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware is piece of code that requests run through before the endpoint functionality is executed. They can modify or make decisions based on the content on the requests. Sessions are a method of authentication when temporary authentication  is stored on the server and grants a user specific access for a period of time. Bcrypt is a library that hashes passwords and compares those hases for extra security. JWT is a Json web token. It is a method of authentication where once credentials are verified the user is issued a 'token' that is included with all future requests to verify authentication.

2.  What does bcrypt do in order to prevent attacks?
    It uses a one way math function to turn passwords into long strings so that plain text passwords aren't stored on the server.

3.  What are the three parts of the JSON Web Token?
    The three parts of the jwt are the payload, the secret and the options.