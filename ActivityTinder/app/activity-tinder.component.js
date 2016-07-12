(function(app) {

  app.ActivityTinderComponent = ActivityComponent;

  function ActivityComponent(dataService) {
    this.name = dataService.getActivity();
  }
  ActivityComponent.parameters = [
    app.DataService
  ];
  ActivityComponent.annotations = [
    new ng.core.Component({
      selector: 'tindering',
      template: '<h1>Activity: {{name}}</h1>'
    })
  ];

})(window.app = window.app || {});
