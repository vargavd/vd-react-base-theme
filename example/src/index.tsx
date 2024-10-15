// react imports
import { createRoot } from 'react-dom/client';

// main component
import App from './components/App';

// redux imports
import { Provider } from 'react-redux'
import { store } from './store'

// main styles
import "./styles.scss";

createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
