import { h } from 'preact';
import { MapContainer as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { ILocation } from "../models";

interface IProps {
    location: ILocation;
}

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
        </LeafletMap>
    );
}
