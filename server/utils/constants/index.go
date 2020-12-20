package constants

import (
	"os"

	_ "github.com/spf13/viper"
)

var PORT = os.Getenv("PORT")
