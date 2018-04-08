function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById("heading");
  if (this.heading) {
    console.log('true');
    this.heading.innerHTML = controller.getModelHeading();
    this.inputtext = document.getElementById("inputtext");
    this.inputtext.addEventListener('input', controller);
  }
  controller.view = this;
  console.log('View');
}