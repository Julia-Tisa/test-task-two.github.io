function Panel() {
  this.counter = 0;
  this.panelElement = null;
  this.counterElement = null;
}
    
Panel.prototype.init = function (panelElement) {
  this.panelElement = panelElement;
  var classOfElement = panelElement.classList[0];
  var counterElement = document.querySelector(`[class="${classOfElement}-counter"]`);
  this.counterElement = counterElement;
  panelElement.addEventListener('click', this.handleClick.bind(this));
};
    
Panel.prototype.handleClick = function () {
  this.counter += 1;
  this.counterElement.textContent = this.counter;
};

function main() {
  var panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
};
  
window.onload = main;
