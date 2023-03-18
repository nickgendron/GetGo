API Endpoints:

User API Endpoints:

-To get all users currently in the database:
localhost:8080/api/user/all

Flight API Endpoints:

- To get a listing of flights to a given destination:

  localhost:8080/api/flights/prices?originCode=<ORIGIN_AIRPORT_CODE>&&destCode=<DESTINATION_AIRPORT_CODE>>&&departDate=<DEPARTURE_DATE>&&returnDate=<RETURNING_DATE>&&adults=<NUM_OF_ADULTS>&&numFlights=<NUM_OF_FLIGHTS_TO_DISPLAY>

- Airport codes should be the IATA airport code (https://www.nationsonline.org/oneworld/IATA_Codes/airport_code_list.htm)
- Dates should be in the format: YYYY-MM-DD
