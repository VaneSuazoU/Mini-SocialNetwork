export const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        const user = result.user;
        document.querySelector('.result').innerHTML = '';
        const database = firebase.firestore();
        return database.collection('user').doc(user.uid).set({
            nombre: user.displayName,
            email: user.email,
        });
    }).catch((error) => {
        document.querySelector('.result').innerHTML = "Intenta nuevamente";  
    });
};

export const singIn = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        document.querySelector('.result').innerHTML = "Ingreso existoso";
    })
    .catch((error) => {
        document.querySelector('.result').innerHTML = "Intenta nuevamente";       
    });
    console.log(singIn)
}

export const createAccount = () => {
    const username = document.getElementById('userName').value;
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const database = firebase.firestore()
        document.querySelector('.result').innerHTML = "Tu cuenta fue creada"  
        
        return database.collection('user').doc(user.uid).set({
            name : username,
            email,        
        });
    })   
    .catch((error) => {
        document.querySelector('.result').innerHTML = "Intenta nuevamente";  
    });
};

export const passRecover = () => {
    const  auth = firebase.auth();
    const emailAddress = document.querySelector('#emailrecover'). value;
    
    auth.sendPasswordResetEmail(emailAddress).then(() => {
        document.querySelector('.result').innerHTML = "Enviamos a tu correo el enlace para cambiar tu contraseña"
    }).catch(function(error) {
        document.querySelector('.result').innerHTML = "Intenta nuevamente";  
    });
}

export const signOff = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        document.querySelector('.result').innerHTML = error.message;
    });
}