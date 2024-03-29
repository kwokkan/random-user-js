import { useEffect, useState } from 'preact/hooks';
import { IUser } from '../models';
import { get } from '../services/randomUserService';
import { User } from './User';

export function App() {
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(10);
    const [users, setUsers] = useState<IUser[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function init() {
            setIsLoading(true);

            try {
                const users = await get({
                    page,
                    results
                });

                setUsers(users);
            }
            catch{
            }

            setIsLoading(false);
        }

        init();
    }, []);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    if (users.length === 0) {
        return (
            <h1>Random user</h1>
        );
    }

    return (
        <div className="users">
            {users.map(user =>
                <User key={user.login.uuid} user={user} />
            )}
        </div>
    );
}
