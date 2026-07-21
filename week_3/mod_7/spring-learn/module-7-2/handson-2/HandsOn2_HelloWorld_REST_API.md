###### 1\. In network tab of developer tools show the HTTP header details received



Steps:

1. Open Chrome Browser
2. Press F12
3. Open Network tab
4. Open:
http://localhost:8083/hello
5. Click the /hello request
6. Open Headers



**Request Headers:**



These headers are sent by the browser to the server.



Example:



Host: localhost:8083

User-Agent: Mozilla/5.0

Accept: text/html



Purpose:

|**Header**|**Description**|
|-|-|
|Host|Target server|
|User-Agent|Browser information|
|Accept|Types of content browser accepts|





**Response Headers:**



These headers are sent by the server to the browser.



Example:



Content-Type: text/html;charset=UTF-8

Content-Length: 13

Date: Sun, 05 Jul 2026 13:32:34 GMT



Purpose:

|**Header**|**Description**|
|-|-|
|Content-Type|Type of returned content|
|Content-Length|Size of response|
|Date|Response timestamp|



**Observation:**

The browser sends an HTTP GET request to /hello and receives a response containing the text:

|**Hello World!!**|
|-|









###### 2\. In postman click on "Headers" tab to view the HTTP header details received



**Steps:**

1. Open Postman
2. Select:
GET
3. Enter URL:
http://localhost:8083/hello
4. Click:
Send
5. Open Headers tab in the response section.



**Request Headers:**



Example:



User-Agent: PostmanRuntime

Accept: \*/\*

Host: localhost:8083



These headers are automatically added by Postman.



**Response Headers:**



Example:



Content-Type: text/plain;charset=UTF-8

Content-Length: 13

Connection: keep-alive

Date: Sun, 05 Jul 2026

Observation



The Spring Boot REST service returned:



|Hello World!!|
|-|



with HTTP Status:



|200 OK|
|-|



This confirms that the REST endpoint /hello is working successfully.











































































































