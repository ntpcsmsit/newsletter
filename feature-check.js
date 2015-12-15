(function(){
  var typeChecks = [
    typeof fetch, typeof DOMParser, typeof Object.keys
  ];

  var i;

  for(i=0; i<typeChecks.length; i+=1){
    if(typeChecks[i] === 'undefined') {
      location.href = 'not-supported.html'
      return;
    }
  }

})();