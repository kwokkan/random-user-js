import { IDateOfBirth } from './IDateOfBirth';
import { IIdentity } from './IIdentity';
import { ILocation } from './ILocation';
import { ILogin } from './ILogin';
import { IName } from './IName';
import { IPicture } from './IPicture';

export interface IUser {
    gender: 'male' | 'female';
    name: IName,
    location: ILocation,
    email: string,
    dob: IDateOfBirth,
    phone: string;
    cell: string;
    login: ILogin;
    id: IIdentity,
    picture: IPicture
}
