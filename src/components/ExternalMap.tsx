import { MapContainer as LeafletMap, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { ILocation } from "../models";

interface IProps {
    location: ILocation;
}

// https://github.com/Leaflet/Leaflet/issues/694
const ResizeHack = () => {
    const map = useMap();
    map.invalidateSize();

    return null;
};

export function ExternalMap(props: IProps) {
    const { latitude, longitude } = props.location.coordinates;

    const coordinates = [latitude, longitude] as unknown as [number, number];
    const zoom = 12;

    return (
        <LeafletMap className="user-map" center={coordinates} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={coordinates}>
                <Popup>
                    {props.location.street.name}
                </Popup>
            </Marker>

            <ResizeHack />
        </LeafletMap>
    );
}
