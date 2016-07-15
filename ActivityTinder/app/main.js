(function(app) {

  var bootstrap = ng.platformBrowserDynamic.bootstrap;
  var LocationStrategy = ng.common.LocationStrategy;
  var HashLocationStrategy = ng.common.HashLocationStrategy;

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(app.ActivityCreateComponent, [app.DataService, ng.forms.disableDeprecatedForms(), ng.forms.provideForms()]);
    bootstrap(app.ActivityJoinedComponent, [app.DataService]);
    bootstrap(app.ActivityTinderComponent, [app.DataService]);
    bootstrap(app.ActivityLoginComponent, [app.DataService]);
  });

})(window.app = window.app || {});
