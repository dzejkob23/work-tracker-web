import axios from "axios"

const local = "http://localhost:8080/"
const prod = "https://agile-depths-77835.herokuapp.com/"

function apiTest() {
    axios
    .get(prod)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    .finally(() => console.log("finally done"))
}