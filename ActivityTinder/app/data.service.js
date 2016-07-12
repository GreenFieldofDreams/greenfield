(function(app) {

  function DataService() {}
  DataService.annotations = [
    new ng.core.Injectable()
  ];
  DataService.prototype.getActivity = function() {
    return 'running';
  };
  DataService.prototype.getJoinedActivities = function() {
  	var activities = "no activities";
  	firebase.database().ref('activities').once('value').then(function(snapshot) {
  		console.log('inside promise');
  		console.log(snapshot.val());
  		return snapshot.val().test;
	});
	
  };
  app.DataService = DataService;

})(window.app = window.app || {});
