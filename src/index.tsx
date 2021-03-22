import React from 'react';
import { render } from 'react-dom';
import * as dotenv from 'dotenv';
import App from './features/App';

dotenv.config();

render(<App />, document.getElementById('root'));
