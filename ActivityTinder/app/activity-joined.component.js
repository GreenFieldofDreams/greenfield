(function(app) {

  app.ActivityJoinedComponent = ActivityComponent;

  function ActivityComponent(dataService) {
    this.name = dataService.getJoinedActivities();
  }
  ActivityComponent.parameters = [
    app.DataService
  ];
  ActivityComponent.annotations = [
    new ng.core.Component({
      selector: 'joined-activities',
      template: '<h1>Activity: {{name}}</h1>'
    })
  ];

})(window.app = window.app || {});
