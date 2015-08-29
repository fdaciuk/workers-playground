;(function() {
  'use strict';

  class App {
    init() {
      this.initEvents();
      this.bigForNormal();
    }

    initEvents() {
      console.log( 'começou worker' );
      console.time( 'worker' );
      this.bigFor = new Worker( './worker.js' );
      this.bigFor.addEventListener( 'message', function( event ) {
        console.log( event.data );
        console.timeEnd( 'worker' );
      });
    }

    bigForNormal() {
      console.log( 'começou bigFor' );
      console.time( 'bigFor' );
      for(let i = 0; i < 100000; i++) {
        console.log( 'calculando...' );
      }
      console.timeEnd( 'bigFor' );
    }
  }

  var app = new App();
  app.init();
})();
