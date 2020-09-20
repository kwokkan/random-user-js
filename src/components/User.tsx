import { h } from "preact";
import { IUser } from "../models";

interface IUserProps {
    user: IUser;
}

export function User(props: IUserProps) {
    const { name } = props.user;

    return (
        <div className="user">
            <h3>{name.title} {name.first} {name.last}</h3>
        </div>
    );
}
