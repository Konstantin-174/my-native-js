import {GovernmentBuildingsType, HouseType} from '../02/02_1';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map( b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map( h => h.address.street.title)
}

export function createMessagesForStreet(houses: Array<HouseType>) {
    return houses.map( h => `Hello people from ${h.address.street.title}`)
}