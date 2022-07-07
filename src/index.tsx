import { Icon } from "leaflet";
import { render } from 'preact';
import { App } from './components/App';

Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

render(
    <App />,
    document.getElementById('app')!
);
