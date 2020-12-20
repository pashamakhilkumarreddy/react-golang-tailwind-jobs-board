package helpers

import (
	"strings"
)

func GetPort(port string) string {
	if len(strings.Trim(port, "")) > 0 {
		return ":" + string(port)
	}
	return ":5000"
}
