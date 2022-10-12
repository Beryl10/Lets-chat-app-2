var firebaseConfig = {
    apiKey: "AIzaSyBfLYfNnHjXY0vNbdvUnfCWCqyPRvMAKsY",
    authDomain: "lets-chat-app-ea0f1.firebaseapp.com",
    databaseURL: "https://lets-chat-app-ea0f1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-ea0f1",
    storageBucket: "lets-chat-app-ea0f1.appspot.com",
    messagingSenderId: "797588375791",
    appId: "1:797588375791:web:1e9e8265933ab81458731a",
    measurementId: "G-FYW5T59Q4N"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    window.location = "Kwitter_room.html";
}