# integration


Build an API server which accepts JSON as an input 
API to be available as <ip>:<port>/jsonapi via POST method
It should verify if the request body has at least two key:value pairs and shown in this example {“type” : ”hello world”, “day” : ”Sunday”}
On bad user input, return 400
On receiving valid input, return 201

Build a front-end UI that has a textarea and a submit button. 
User inputs any string
Verify if string is valid JSON before posting to API
If you receive a 400 response from the API, throw and error message to the user
IF you receive 201 response from the API, then create a form using the JSON entered by the user where the label of each field will be a key, and the value of the input to be initialized with value from the JSON input.

