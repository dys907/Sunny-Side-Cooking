        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (9 lines of code)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
        var firebaseConfig = {
            apiKey: "AIzaSyBuyLwO1IfDDTX5O53FXFeEA24j0Wukyfo",
            authDomain: "sunnysidecooking-ad370.firebaseapp.com",
            databaseURL: "https://sunnysidecooking-ad370.firebaseio.com",
            projectId: "sunnysidecooking-ad370",
            storageBucket: "sunnysidecooking-ad370.appspot.com",
            messagingSenderId: "96079646236",
            appId: "1:96079646236:web:3c48d4b9959274fbd219d9"
          };
          //------------------------------------------------
          // Initialize Firebase and Firestore reference
          // Do not delete!
          //------------------------------------------------
          firebase.initializeApp(firebaseConfig);
          const db = firebase.firestore();