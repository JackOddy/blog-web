export default `
\`\`\`go
package main

import (
    "fmt"
    "github.com/gorilla/mux"
    "http"
)

func main() {
    router := mux.NewRouter()

    defer fmt.Println("--->", "Server is listening")
    http.ListenAndServe(":9000", router)
}
\`\`\`
`;
