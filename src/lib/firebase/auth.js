export const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('user', user)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        console.log('error', error)
    });
};

export const createAccount = () => {
    const username = document.getElementById('userName').value;
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        const database = firebase.firestore();
        return database.collection('user').doc(user.uid).set({
            nombre: username,
            email,
        });
        
        // ...
    })
    .then(() => {
        emailVerification();
        /* const user = userCredential.user; */
    })
    .catch((error) => {
        document.querySelector('.result').innerHTML = error.message;
    });
};
