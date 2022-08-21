import ReactDOM from 'react-dom';
import './index.scss';

import Measures from './components/Counter';

const domContainer = document.querySelector('[data-id=measures]');
ReactDOM.render(<Measures />, domContainer);
