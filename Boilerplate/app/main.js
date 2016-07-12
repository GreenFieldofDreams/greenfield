(function(app) {

  var bootstrap =
    ng.platformBrowserDynamic.bootstrap;
  var LocationStrategy =
    ng.common.LocationStrategy;
  var HashLocationStrategy =
    ng.common.HashLocationStrategy;

  var HeroComponent = app.HeroComponent;

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(HeroComponent);
    bootstrap(app.HeroComponentDsl);
    bootstrap(app.HeroLifecycleComponent);
    bootstrap(app.HeroDIComponent, [app.DataService]);
    bootstrap(app.HeroDIInlineComponent, [app.DataService]);
    bootstrap(app.HeroDIInjectComponent, [{
      provide: 'heroName',
      useValue: 'Windstorm'
    }]);
    bootstrap(app.HeroDIInjectComponent2, [{
      provide: 'heroName',
      useValue: 'Bombasto'
    }]);
    bootstrap(app.HeroDIInjectAdditionalComponent);
    bootstrap(app.HeroIOComponent);
    bootstrap(app.HeroesHostBindingsComponent);
    bootstrap(app.HeroesQueriesComponent);
  });

})(window.app = window.app || {});

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
