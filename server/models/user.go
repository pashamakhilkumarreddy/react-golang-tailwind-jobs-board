package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User model
type User struct {
	ID        primitive.ObjectID `bson:"_id"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
	email     string             `bson:"email"`
	password  string             `bson:"password"`
}
