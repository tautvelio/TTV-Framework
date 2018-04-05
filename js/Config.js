window.onload = function() {
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

function locationHashChanged() {
  console.log('model hash check');
  if (location.hash === "#home") {
    console.log('reloaded');
    location.reload();
  }
}
window.onhashchange = locationHashChanged;