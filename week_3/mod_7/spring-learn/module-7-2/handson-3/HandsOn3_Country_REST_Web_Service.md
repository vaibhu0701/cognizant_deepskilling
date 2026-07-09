1. ###### **What happens in the controller method?**



@RequestMapping("/country")

public Country getCountryIndia()





When user requests:



http://localhost:8083/country



Spring:

1. Receives HTTP GET request.
2. Finds matching controller method.
3. Executes getCountryIndia().
4. Loads bean from country.xml.
5. Returns Country object.







###### **2. How bean is converted into JSON?**



The method returns:



Country



object.



Spring Boot automatically uses:



Jackson Library



to convert:



Country{

&#x20;code="IN",

&#x20;name="India"

}



into:



{

&#x20; "code":"IN",

&#x20; "name":"India"

}



This process is called: Serialization







###### **3. In network tab of developer tools show the HTTP header details received**



Press:



F12

→ Network

→ country



Observe:



Request:



GET /country HTTP/1.1

Host: localhost:8083



Response:



HTTP/1.1 200 OK

Content-Type: application/json



Important:



Content-Type = application/json



because JSON is returned.





###### **4. In postman click on "Headers" tab to view the HTTP header details received**



After clicking Send:



Headers Tab



Observe:



Content-Type: application/json

Content-Length: ...

Date: ...

