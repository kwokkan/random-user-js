import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

// Parcel JS hack
import 'regenerator-runtime/runtime';

render(
    <App />,
    document.getElementById('app')
);
