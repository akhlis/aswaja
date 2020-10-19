(function () {
    'use strict';
}());

const boxes = (function () {
    let boxesArray = document.getElementsByClassName('content-box');
    let boxes = {},
        i = 1;
    for (box of boxesArray) {
        boxes['box' + i++] = box;
    }
    return boxes;
}());

for (resizer of document.getElementsByClassName('resizer')) {

    resizer.addEventListener('mousedown', e => {
        e.preventDefault();
        let resizer = e.target

        document.body.style.cursor = 'n-resize';

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', e => {
            document.removeEventListener('mousemove', resize);
            document.body.style.cursor = 'auto';
        });

        function resize(e) {
            return resizeY(e)
            e.preventDefault();
        }

        function resizeY(e) {
            let iframe = document.querySelector('.iframe__wrapper')
            let bodyHeight = 100 / document.body.clientHeight;
            let topHeight = (parseFloat(getComputedStyle(boxes.box1, '').height) + e.movementY) * bodyHeight;
            boxes.box1.style.height = topHeight + '%';
            boxes.box2.style.height = (100 - topHeight) + '%';
            iframe.style.paddingTop = (100 - topHeight) + '%';
        }
    })
}

(function () {
    /**
     * Components to our editor
     */
    const htmlField = document.getElementById("html");
    const cssField = document.getElementById("css");
    const jsField = document.getElementById("js");
    const preview = document.getElementById("preview");

    /**
     * Method that gets the values from the textareas
     * and insert to an iframe
     */
    function render() {
        let iframeComponent = preview.contentWindow.document;

        iframeComponent.open();
        if (htmlField) {
            iframeComponent.writeln(`
        ${htmlField.innerText}
        `);
        }
        if (cssField) {
            iframeComponent.writeln(`
            <style>${cssField.innerText}</style>
        `);
        }
        if (jsField) {
            iframeComponent.writeln(`
            <script>${jsField.innerText}</script>
            `);
        }
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