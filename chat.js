// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ


 var firebaseConfig = {
    apiKey: "AIzaSyCQLiITsUVZI-3I10GSKXbHOKglMZchtVs",
    authDomain: "proyecto-100-17dcc.firebaseapp.com",
    projectId: "proyecto-100-17dcc",
    storageBucket: "proyecto-100-17dcc.appspot.com",
    messagingSenderId: "318823132644",
    appId: "1:318823132644:web:bd34092ee021b482ee2bf1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



