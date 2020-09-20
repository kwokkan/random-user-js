import { h, render } from 'preact';
import { App } from './components/App';

// Parcel JS hack
import 'regenerator-runtime/runtime';

render(
    <App />,
    document.getElementById('app')!
);
