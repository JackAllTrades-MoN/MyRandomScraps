import axios from 'axios';

const API_LOCATION =
    (process.env.NODE_ENV === "development")
    ? "http://192.168.100.230"
    : "https://scraps.f5.si";

export interface Scrap {
    id: number
    caption?: string
    cover?: Dynamic | Static
    content: External | Internal
}

export interface Dynamic {
    kind: "dynamic"
    cover: string
}

export interface Static {
    kind: "static"
    url: string
}

export interface External {
    kind: "external"
    url: string
}

export interface Internal {
    kind: "internal"
}

export interface DetailRecord {
    caption: string
    body: string
    updated_at: string
    created_at: string
}

const dummyPromise = <T>(dummyData: T) => new Promise<T>((resolve, _reject) => {
    resolve(dummyData)
});

export const getCategories = () =>
    axios.get<string[]>(`${API_LOCATION}/categories`);

export const getScraps = (limit: string, filter?: string) => {
    let query = `${API_LOCATION}/scraps`;
    let params: string[] = [];
    if (limit) { params.push(`limit=${limit}`) };
    if (filter) { params.push(`filter=${filter}`) };
    if (params.length >= 1) {
        query += "?" + params.join('&');
    }
    return axios.get<Scrap[]>(query);
};

export const getDetail = (detailId: number) =>
    axios.get<DetailRecord>(`${API_LOCATION}/scraps/${detailId}/detail`);
