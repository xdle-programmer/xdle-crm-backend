import {createRoot} from 'react-dom/client';
import * as React from "react";
import {App} from "./App";

const container = document.getElementById('crm');
const root = createRoot(container);
root.render(<App string={123}/>);
