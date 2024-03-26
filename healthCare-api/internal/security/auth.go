package security

import (
	"net/http"

	"github.com/dgrijalva/jwt-go"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		for _, url := range allowedUrls {
			if url == path {
				next.ServeHTTP(w, r)
				return
			}
		}

		authorizationHeader := r.Header.Get("Authorization")
		if authorizationHeader == "" {
			http.Error(w, "Token de autorização não fornecido", http.StatusUnauthorized)
			return
		}

		tokenString := authorizationHeader[len("Bearer "):]

		token, err := jwt.ParseWithClaims(tokenString, &TokenClaims{}, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		if err != nil || !token.Valid {
			http.Error(w, "Token de autorização inválido", http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(w, r)
	})
}
