package jobs

import (
	"fmt"
	"net/http"
)

func getJobs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(w)
}
