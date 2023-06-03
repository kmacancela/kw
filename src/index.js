import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<BrowserRouter><App /></BrowserRouter>);