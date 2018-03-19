function Controller(model) {
  var controller = this;
  this.model = model;

  //Clicks Eventlistener
  this.handleEvent = function(e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        controller.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  //Get Model Heading
  this.getModelHeading = function() {
    return controller.model.heading;
  }

  //Change the Model
  this.clickHandler = function(target) {
    if (controller.model.heading === 'World') {
      controller.model.heading = 'Hello';
      console.log('Model updated to Hello in Controller');
    } else {
      controller.model.heading = 'World';
      console.log('Model updated to World in Controller');
    }
    target.innerText = controller.getModelHeading();
  }
  console.log('Controller');
}