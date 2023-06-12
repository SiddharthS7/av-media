var firebaseConfig = {
    apiKey: "AIzaSyB7XnRqEc5yeqAs7QwA3Fk_wHweY0h7Iis",
      authDomain: "avmedia-7e171.firebaseapp.com",
      projectId: "avmedia-7e171",
      storageBucket: "avmedia-7e171.appspot.com",
      messagingSenderId: "537405325177",
      appId: "1:537405325177:web:00a6aec21fa0447bd2b9a8",
      measurementId: "G-JM9XR8BRJK"
  };

  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
  var form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;

    let date = new Date();
    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });

    console.log(formattedDate);

    db.collection("users").add({
      name: name,
      email: email,
      message: msg,
      datetime: formattedDate
    })
    .then(function(docRef) {
        window.alert("Message sent successfully!");
      console.log("Document written with ID: ", docRef.id);
      form.reset();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  });