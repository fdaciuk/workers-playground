;(function() {
  'use strict';

  class App {
    init() {
      this.initEvents();
      this.bigForNormal();
    }

    initEvents() {
      console.time( 'worker' );
      this.bigFor = new Worker( './worker.js' );
      this.bigFor.addEventListener( 'message', function( event ) {
        console.timeEnd( 'worker' );
        console.log( event.data );
      });
    }

    bigForNormal() {
      console.time( 'bigFor' );
      for(let i = 0; i < 10000; i++) {
        console.log( 'calculando...' );
      }
      console.timeEnd( 'bigFor' );
    }
  }

  var app = new App();
  app.init();
})();
