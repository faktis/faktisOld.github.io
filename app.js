
    
    var config = {
        apiKey: "AIzaSyCyIRWroFT4-u8AKYlEfOGtsfdPobGCIRM",
        authDomain: "website-90f82.firebaseapp.com",
        databaseURL: "https://website-90f82.firebaseio.com",
        projectId: "website-90f82",
        storageBucket: "website-90f82.appspot.com",
        messagingSenderId: "578680069283"
      };
      
      var defaultApp = firebase.initializeApp(config);

console.log(defaultApp.name);  // "[DEFAULT]"

// You can retrieve services via the defaultApp variable...
//var defaultStorage = defaultApp.storage();
var defaultDatabase = defaultApp.database();

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
// ... or you can use the equivalent shorthand notation
//defaultStorage = firebase.storage();
//defaultDatabase = firebase.database();
