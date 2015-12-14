(function(){
  var typeChecks = [
    typeof fetch, typeof DOMParser
  ];

  var i;

  for(i=0; i<typeChecks.length; i+=1){
    if(typeChecks[i] === 'undefined') {
      location.href = 'not-supported.html'
      return;
    }
  }

})();