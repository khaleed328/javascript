
// write a code thats a question using the prompt method
//the question should say "Who is there?"
//if the question reply is "Dami", it should prompt for a password
//if the qestion reply is not "Dami", alert "I dont know you"
//if the password is "javascript", then alert "welcome user"
//if the password is not "javascript", alert "wrong password"
//if there is no question, alert "cancelled"

let dami = "Dami"
const sigIn = prompt("Who Is There?")
if (sigIn === dami) {
    alert("I dont Know You")
}else if (sigIn === dami) {
    let password = prompt("Enter password")
}if (password === ("javascript")) {
    alert("Welcome User")
} else {
    alert("Worng Password")
}
