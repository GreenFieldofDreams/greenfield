(function(app) {

  app.ActivityLoginComponent = ActivityComponent;

  function ActivityComponent(dataService) {
    this.name = dataService.getActivity();
  }
  ActivityComponent.parameters = [
    app.DataService
  ];
  ActivityComponent.annotations = [
    new ng.core.Component({
      selector: 'logging-in',
      template: '<h1>Activity: {{name}}</h1>'
    })
  ];

})(window.app = window.app || {});
