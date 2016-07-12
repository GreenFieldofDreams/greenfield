(function(app) {

  var bootstrap =
    ng.platformBrowserDynamic.bootstrap;
  var LocationStrategy =
    ng.common.LocationStrategy;
  var HashLocationStrategy =
    ng.common.HashLocationStrategy;

  var ActivityComponent = app.ActivityComponent;

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(app.ActivityCreateComponent, [app.DataService]);
    bootstrap(app.ActivityJoinedComponent, [app.DataService]);
    bootstrap(app.ActivityLoginComponent, [app.DataService]);
    bootstrap(app.ActivityTinderComponent, [app.DataService]);
  });

})(window.app = window.app || {});
