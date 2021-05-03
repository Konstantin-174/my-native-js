export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id?: number //Может быть, а может не быть
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    stuffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}