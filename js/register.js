
document.getElementById("buttonsgnup").onclick = function () {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userName = document.getElementById("userName"). value;
    var userNumber =document.getElementById("userNumber"). value 



    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            firebase.firestore().collection("users").doc().set({
                nameValue : userName,
                numberValue: userNumber

            }).then((docRef) => {
               
            });

          //  window.location.href = "profile.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

}

