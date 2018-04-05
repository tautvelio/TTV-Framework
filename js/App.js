(function() {
  function init() {
    var router = new Router([
      new Route('home', 'Home.html'),
      new Route('about', 'About.html')
    ]);
  }
  init();
}());