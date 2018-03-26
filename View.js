function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById("heading");
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);

  this.inputtext = document.getElementById("inputtext");
  this.inputtext.addEventListener('input', controller);
  controller.view = this;
  console.log('View');
}