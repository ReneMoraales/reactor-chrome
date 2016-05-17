(function() {
  var iframe = document.getElementById("iframe");
  setTimeout(function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      iframe.src = "http://beta.reactorapp.com/reactions/new?url="+encodeURIComponent(tabs[0].url);
    });
  }, 1000);
})();
