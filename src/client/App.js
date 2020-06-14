import { render } from "./JsxConverter";
const viewport = require('./views/Viewport');
require('./web/index.html');

const app = (() => {
    let root;

    const renderViewport = () => {
        render(viewport.default(), root);
    };

    const update = () => {
        console.log('update');
    };

    document.addEventListener('DOMContentLoaded', () => {
        root = document.getElementById('root');
        renderViewport();
    });

    return {update};

})();

export default app;
