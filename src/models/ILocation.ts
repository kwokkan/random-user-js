import { ICoordinates } from './ICoordinates';
import { ITimezone } from './ITimezone';

export interface ILocation {
    street: IStreet,
    city: string,
    state: string,
    postcode: string,
    coordinates: ICoordinates,
    timezone: ITimezone
}
