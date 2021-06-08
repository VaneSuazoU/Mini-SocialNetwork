const db = firebase.firestore();

export const createPost = () => {
  const text = document.querySelector('#postText').value;
  db.collection('post').add({
    postText: text,
  })
    .then((docRef) => {
      console.log(docRef.id);
      document.querySelector('#postText').value = '';
    })
    .catch(() => {
      console.log('Error');
    });
};

export const showPost = () => {
  const postContain = document.querySelector('#publications');
  db.collection('post').onSnapshot((querySnapshot) => {
    postContain.innerHTML = '';
    querySnapshot.forEach((doc) => {
      postContain.innerHTML += `<div>${doc.data().postText}</div>`;
    });
  });
};

/* export const post = () => {
  document.querySelector('#publications');
  db.collection('post').get().then((querySnapshot) => {
    post.innerHTML = '';
    querySnapshot.forEach((doc) => {
      post.innerHTML += `${doc.data().postText}`;
    });
  });
}; */
