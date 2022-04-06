export interface Scrap {
    id: number
    caption?: string
    cover?: string
    content: External | Internal
}

export interface External {
    kind: "external"
    url: string
}

export interface Internal {
    kind: "internal"
}

const dummyData: Scrap[] = [
    {
        "id": 0,
        "caption": "About My Random Scraps",
        "content": {
            kind: "internal"
        }
    },
    {
        "id": 1,
        "caption": "明日使える(?)ムダ知識をあなたに~Python3知られざる機能~",
        "content": {
            kind: "external",
            url: "https://qiita.com/little_wolf513/items/1bc492d5c271c8aea8fa"
        }
    },

    {
        "id": 3,
        "cover": `${process.env.PUBLIC_URL}/chin-up-bar.jpg`,
        "content": {
            kind: "external",
            url: "https://www.pixiv.net/artworks/97424759"
        }
    }
]

export interface DetailRecord {
    caption: string
    body: string
    updated_at: string
    created_at: string
}

const dummyDetail: DetailRecord = {
    caption: "About My Random Scraps",
    body: `My Random Scrapsは私が作ったものを取り留めなくおいておくための場所です。何か特定のものをお探しの場合は画面上部のジャンルをクリックすることでフィルタをご活用ください。

My Random Scraps is a place where I put anything I made. Filters on the header may help you to find what you want.`,
    updated_at: "2022/04/06",
    created_at: "2022/04/06"
}

const dummyPromise = <T>(dummyData: T) => new Promise<T>((resolve, _reject) => {
    resolve(dummyData)
})

export const getScraps = (filter: string | null) => dummyPromise(dummyData);
export const getDetail = (detailId: number) => dummyPromise(dummyDetail);