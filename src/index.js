import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';

//Registration Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5bd0NjXH9edXdWT2hc')

ReactDOM.render(<App />, document.getElementById('root'));