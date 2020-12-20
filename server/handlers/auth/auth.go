package auth

import (
	"fmt"
	"net/http"
)

// Login Post Handler
func Login(w http.ResponseWriter, r *http.Request) {
	fmt.Println(w)
}
