package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	auth "server/handlers/auth"
	"server/utils/constants"
	helpers "server/utils/helpers"
	dbconn "server/utils/helpers/dbconnection"

	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Jobs Board Backend")
	var PORT = flag.String("port", constants.PORT, "port to listen on")
	r := mux.NewRouter()
	r.HandleFunc("/login", auth.Login).Methods(http.MethodGet)
	fmt.Printf("App is up and running on PORT %s\n", *PORT)
	dbconn.ConnectToDB()
	log.Fatal(http.ListenAndServe(helpers.GetPort(*PORT), r))
}
