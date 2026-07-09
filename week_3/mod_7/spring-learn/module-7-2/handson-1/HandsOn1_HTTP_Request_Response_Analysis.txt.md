Website Observed:

https://www.google.com



When Press F12 to open the Developer Tool and go to 'Network' table in Developer Tools

Further click on the first link available in the 'Network' tab, And then new window will open in the right hands side. 

Observed the following details it contain 3 sections:



General

Response Headers

Request Headers







General Information

Request Method : GET

Status Code    : 200 OK

Scheme         : HTTPS



Observation:

GET method was used to retrieve the webpage.

Status Code 200 indicates the request was successful.

HTTPS was used for secure communication.





Request Headers

Observed Headers:



Host: www.google.com

User-Agent: Chrome

Accept: text/html



Observation:

Host identifies the server receiving the request.

User-Agent identifies the browser.

Accept indicates the content types the browser can process.







Response Headers

Observed Headers:



Content-Type: text/html

Content-Encoding: gzip

Date: ...



Observation:

Content-Type text/html indicates the response contains an HTML page.

Content-Encoding gzip means the response is compressed.

Date indicates when the response was generated.









HTTP Request Format



Example observed:



GET / HTTP/1.1

Host: www.google.com



Components:

|**Part**|**Meaning**|
|-|-|
|GET|HTTP Method|
|/|Resource|
|HTTP/1.1|HTTP Version|







HTTP Response Format



Example observed:

HTTP/1.1 200 OK

Content-Type: text/html



Components:

|**Part**|**Meaning**|
|-|-|
|HTTPS/1.1|HTTP Version|
|200|Status Code|
|OK|Status Message|































































































