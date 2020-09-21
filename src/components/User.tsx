import { h } from 'preact';
import { IUser } from '../models';
import { ExternalMap } from './ExternalMap';

interface IUserProps {
    user: IUser;
}

export function User(props: IUserProps) {
    const { name, picture, location } = props.user;
    const fullName = `${name.first} ${name.last}`;

    return (
        <div className="user">
            <div className="user-header">
                <img className="user-picture" src={picture.large} alt={fullName} title={fullName} width={256} height={256} />
                <h3 className="user-name">{fullName}</h3>
            </div>
            <div className="user-content">
                <address className="user-location">
                    <i className="user-location-label">State</i>
                    <strong>{location.state}</strong>
                    <i className="user-location-label">City</i>
                    <strong>{location.city}</strong>
                    <i className="user-location-label">Street</i>
                    <strong>{location.street.number} {location.street.name}</strong>
                </address>
            </div>
            <ExternalMap location={location} />
        </div>
    );
}
