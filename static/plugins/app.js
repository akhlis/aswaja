(function () {
  var _startX = 0;
  var _startY = 0;
  var _dragElement;
  var _leftPane = document.querySelector(".box-1");
  var _rightPane = document.querySelector(".box-2");
  var _container = document.querySelector(".main-holder");
  var _topPane = document.querySelector(".top-pane");


  InitDragDrop();

  console.log(document)

  function InitDragDrop() {
    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;
  }

  function OnMouseDown(e) {
    if (e == null)
      e = window.event;

    var target = e.target != null ? e.target : e.srcElement;

    if ((e.button == 1 && window.event != null || e.button == 0) && target.className == 'drag-x') {
      _startX = e.clientX;
      _dragElement = target;
      document.onmousemove = OnMouseMoveX;
      document.body.focus();
      document.onselectstart = function () {
        return false;
      };
      target.ondragstart = function () {
        return false;
      };
      return false;
    } else if ((e.button == 1 && window.event != null || e.button == 0) && target.className == 'drag-y') {
      _startY = e.clientY;
      _dragElement = target;
      document.onmousemove = OnMouseMoveY;
      document.body.focus();
      document.onselectstart = function () {
        return false;
      };
      target.ondragstart = function () {
        return false;
      };
      return false;
    }
  }

  function OnMouseMoveX(e) {
    if (e == null)
      var e = window.event;
    _leftPane.style.flex = '0 0' + (e.clientX / (_container.clientWidth / 100)) + '%';
  }

  function OnMouseMoveY(e) {
    if (e == null)
      var e = window.event;
    _topPane.style.flex = '0 0' + (e.clientY / (_container.clientHeight / 100)) + '%';
  }

  function OnMouseUp(e) {
    if (_dragElement != null) {
      document.onmousemove = null;
      document.onselectstart = null;
      _dragElement.ondragstart = null;
      _dragElement = null;
    }
  }
})();

(function () {
  /**
   * Components to our editor
   */
  const htmlField = document.getElementById("html");
  const cssField = document.getElementById("css");
  const preview = document.getElementById("preview");

  /**
   * Method that gets the values from the textareas
   * and insert to an iframe
   */
  function render() {
    let iframeComponent = preview.contentWindow.document;

    iframeComponent.open();
    iframeComponent.writeln(`
      ${htmlField.innerText}
      <style>${cssField.innerText}</style>`);
    iframeComponent.close();
  }

  /**
   * Create listener to call the render
   * always after a keypress.
   */
  function compile() {
    document.addEventListener('keyup', function () {
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