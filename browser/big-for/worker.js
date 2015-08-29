;(function() {
  'use strict';

  for( var i = 0; i < 10000000; i++ ) ;
  postMessage( 'Fechou!' );
})();
