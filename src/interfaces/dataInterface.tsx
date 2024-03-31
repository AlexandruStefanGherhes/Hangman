interface Movie {
    name: string;
    selected:boolean
}

interface Category {
    [category:string]:Movie[]
}

interface Data {
    categories:Category;
}

export type {
    Data
}