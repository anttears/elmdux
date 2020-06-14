import JsxConverter from "../../JsxConverter";
import NestedComponent from '../NestedComponent/NestedComponent';
require('./view.css');

export default function View2() {
    return (<div className="view">
        <p>View 1 - child of Viewport</p>
        <NestedComponent thing={ 1 + 2} />  
    </div>);
}
