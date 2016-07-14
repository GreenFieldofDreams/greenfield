(function(app) {

  function DataService() {}
  DataService.annotations = [
    new ng.core.Injectable()
  ];
  DataService.prototype.getActivity = function() {
    return 'running';
  };
  DataService.prototype.getJoinedActivities = function(cb) {
  	firebase.database().ref('activities').once('value').then(function(snapshot) {
      cb.call(this, snapshot.val());
    }.bind(this));
  };

  DataService.prototype.enterNewActivities = function(activity) {
    var sessionsRef = firebase.database().ref('activities');
    sessionsRef.push(activity).then(function(snapshot) { // commented out so we dont actually always create new activity
      console.log('inside creation');
      console.log(activity, snapshot);
    });
  };

  app.DataService = DataService;

})(window.app = window.app || {});
