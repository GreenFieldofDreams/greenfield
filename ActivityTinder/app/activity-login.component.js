(function(app) {

  app.ActivityLoginComponent = 
    ng.core.Component({
      selector: 'logging-in',
      template: `
      <div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true" (click)="login()" ></div>
      `
    })
    .Class({
      constructor: function() {},

      login: function() {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_friends');
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          consol.log(user)
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      }
    })
})(window.app = window.app || {});



