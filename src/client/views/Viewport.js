import JsxConverter, { render } from "../JsxConverter";
import View from './View/View';
import View2 from './View2/View2';

export default function Viewport() {
    const h2Style = {
        color: '#333',
        border: '1px solid #efefef',
        padding: '4px',
        margin: 0
    };
    return (<div className="viewport">
        <h2 className="h2 main-header" my-prop={1 + 2} style={h2Style}>Viewport</h2>
        <View /> 
        <View2 /> 
    </div>);
}
