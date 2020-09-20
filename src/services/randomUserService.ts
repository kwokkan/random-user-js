import { IInfo, IUser } from '../models';

const baseUrl = 'https://randomuser.me/api/?seed=random-user-js';

interface IServerResponse {
    results: IUser[],
    info?: IInfo
}

interface IGetParams {
    page?: number;
    results?: number;
}

function getUrl({ page, results }: IGetParams): string {
    let url = baseUrl;

    if (page) {
        url = `${url}&page=${page}`
    }

    if (results) {
        url = `${url}&results=${results}`;
    }

    return url;
}

export async function get(params: IGetParams = {}): Promise<IUser[]> {
    const url = getUrl(params);

    const response = await fetch(url);
    const json = await response.json() as IServerResponse;

    return json.results;
}
