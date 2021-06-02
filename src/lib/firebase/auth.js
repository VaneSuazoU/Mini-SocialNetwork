/* eslint-disable no-undef */
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      const database = firebase.firestore();
      window.location.hash = '#/home';
      return database.collection('user').doc(user.uid).set({
        nombre: user.displayName,
        email: user.email,
      });
    }).catch(() => {
      document.querySelector('.result').innerHTML = 'Intenta nuevamente';
    });
};

export const singIn = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch(() => {
      document.querySelector('.result').innerHTML = 'Intenta nuevamente';
      const imgTryagain = document.querySelector('#tryAgain');
      imgTryagain.innerHTML = '<img src="./images/tryagaincat.gif">';
    });
};

export const createAccount = () => {
  const username = document.getElementById('userName').value;
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const database = firebase.firestore();
      document.querySelector('.result').innerHTML = 'Tu cuenta fue creada, vuelve al inicio para ingresar';
      return database.collection('user').doc(user.uid).set({
        name: username,
        email,
      });
    })
    .catch(() => {
      document.querySelector('.result').innerHTML = 'Intenta nuevamente';
      const imgTryagain = document.querySelector('#tryAgain');
      imgTryagain.innerHTML = '<img src="./images/tryagaincat.gif">';
    });
};

export const passRecover = () => {
  const auth = firebase.auth();
  const emailAddress = document.querySelector('#emailrecover').value;

  auth.sendPasswordResetEmail(emailAddress).then(() => {
    document.querySelector('.result').innerHTML = 'Enviamos a tu correo el enlace para cambiar tu contraseña';
  }).catch(() => {
    document.querySelector('.result').innerHTML = 'Intenta nuevamente';
    const imgTryagain = document.querySelector('#tryAgain');
    imgTryagain.innerHTML = '<img src="./images/tryagaincat.gif">';
  });
};

export const signOff = () => {
  firebase.auth().signOut().then(() => {
    swal('Hasta pronto!!');
    window.location.hash = '#/';
  }).catch(() => {
    document.querySelector('.result').innerHTML = 'Intenta nuevamente';
    const imgTryagain = document.querySelector('#tryAgain');
    imgTryagain.innerHTML = '<img src="./images/tryagaincat.gif">';
  });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/home';
  } else {
    window.location.hash = '#/error';
  }
});
