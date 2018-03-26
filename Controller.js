function Controller(model) {
  var controller = this;
  this.model = model;


  //Eventlistener
  this.handleEvent = function(e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        controller.clickHandler(e.target);
        break;
      case "input":
        controller.keyupHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

///////////////////////////////////////////////////////////////////////////////
  //Get Model Heading
  this.getModelHeading = function() {
    console.log("from getmodel: " + controller.model.inputtext + " heading " + controller.model.heading);
    controller.model.heading = controller.model.inputtext;
    return controller.model.inputtext;
  }

  this.keyupHandler = function(target) {
    controller.model.inputtext = target.value;
    controller.view.heading.innerHTML = controller.getModelHeading();
  }
  
///////////////////////////////////////////////////////////////////////////////
  this.getModelHead = function() {
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
    target.innerText = controller.getModelHead();
  }
  console.log('Controller');
}