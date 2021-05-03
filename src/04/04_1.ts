import {CityType, GovernmentBuildingsType} from '../02/02_1';

export function demolitionHouses (city: CityType, street: string) {
    return city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getHousesOnTheStreet (city: CityType, street: string) {
    return city.houses = city.houses.filter(h => h.address.street.title === street)
}

export function getBuildingsWithStaffCountGreaterThen (buildings: Array<GovernmentBuildingsType>, count: number) {
    return buildings.filter( b => b.stuffCount > count)
}