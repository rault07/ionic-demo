export interface interfaceRickAndMorty {
    results: Results[],
}

export interface Results {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Origin[],
    location: Location[],
    image: String,
    created: String
}

export interface Origin {
    name: string,
    url: string
}

export interface Location {
    name: string,
    url: string
}