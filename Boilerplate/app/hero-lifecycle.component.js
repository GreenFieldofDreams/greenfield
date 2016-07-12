(function(app) {
  function HeroComponent() {}
  HeroComponent.annotations = [
    new ng.core.Component({
      selector: 'hero-lifecycle',
      template: '<h1>Hero: {{name}}</h1>'
    })
  ];
  HeroComponent.prototype.ngOnInit =
    function() {
      this.name = 'Windstorm';
    };

  app.HeroLifecycleComponent = HeroComponent;

})(window.app = window.app || {});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/