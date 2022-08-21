import ReactDOM from 'react-dom';
import './index.scss';

import Counter from './components/Counter';

const domContainer = document.querySelector('[data-id=counter]');
ReactDOM.render(<Counter />, domContainer);
