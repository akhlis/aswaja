(function(){
  /**
   * Components to our editor
   */
  const htmlField = document.getElementById("html");
  const preview = document.getElementById("preview");

  /**
   * Method that gets the values from the textareas
   * and insert to an iframe
   */
  function render() {
    let iframeComponent = preview.contentWindow.document;

    iframeComponent.open();
    iframeComponent.writeln(`
      ${htmlField.innerText}`);
    iframeComponent.close();
  }

  /**
   * Create listener to call the render
   * always after a keypress.
   */
  function compile() {
    document.addEventListener('keyup', function() {
      render();
    });
  };

  /**
   * Create the listener
   * and render the first values
   */
  compile();
  render();
})();