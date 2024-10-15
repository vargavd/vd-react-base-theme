// react imports
import { createRoot } from 'react-dom/client';

// main styles
import "./styles.scss";

// main component
import App from './components/App';

createRoot(document.getElementById('app')).render(<App />);
