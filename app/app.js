(function() {
  function init() {
    var router = new Router([
      new Route('home', 'home.html'),
      new Route('about', 'about.html')
    ]);
  }
  init();
}());