
      var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      $(".logincover").hide();
      
      
       var dialog = document.querySelector('#dlog');
   
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
   
      dialog.close();
  
      
  } else {
    // No user is signed in.
       $(".logincover").show();
     var dialog = document.querySelector('#dlog');
      
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
   
      dialog.showModal();
  }
});

$("#outbtn").click(
  function()
   {
       
       firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
       
       
   }

    );
        
        
        
$("#btn").click(function(){
   
   
      var email=$("#emaillogin").val();
      var password=$("#passwordlogin").val();
      
      if(email !="" &&password !="")
          {
              $("#logprog").show();
             
                 $("#btn").hide();
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  $("#error").show().text(error.message);
      
                 $("#logprog").hide();
             
                 $("#btn").show();
                // Handle Errors here.
/*  var errorCode = error.code;
  var errorMessage = error.message;*/
  // ...
});

          }
      
  });


$("#googlebtn").click(function(){
    

   firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});



