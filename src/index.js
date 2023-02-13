import ReactDOM from 'react-dom/client';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CartContext from './components/CartContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartContext>
        <App />
    </CartContext>

);