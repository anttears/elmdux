import JsxConverter from "../../JsxConverter";
require('./nestedComponent.css');

const logger = () => {
    console.log('Nested component clicked');
}

export default function NestedComponent(props) {
    return (<div className="nested-component">
        <p className="nc-text" onClick={logger}>Nested Component, child of View 1 - with property: {props.thing}</p>
    </div>);
}
