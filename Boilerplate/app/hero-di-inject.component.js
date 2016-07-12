(function(app) {

  function HeroComponent(name) {
    this.name = name;
  }
  HeroComponent.parameters = [
    'heroName'
  ];
  HeroComponent.annotations = [
    new ng.core.Component({
      selector: 'hero-di-inject',
      template: '<h1>Hero: {{name}}</h1>'
    })
  ];

  app.HeroDIInjectComponent = HeroComponent;
  
})(window.app = window.app || {});

(function(app) {
  var HeroComponent = ng.core.Component({
    selector: 'hero-di-inline2',
    template: '<h1>Hero: {{name}}</h1>'
  })
  .Class({
    constructor:
      [new ng.core.Inject('heroName'), 
       function(name) {
         this.name = name;
       }]
  });

  app.HeroDIInjectComponent2 = HeroComponent;

})(window.app = window.app || {});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/