import {CityType} from '../02/02_1';
import {demolitionHouses, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet} from './04_1';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy Street'}
                }
            },
            {
                id: 2,
                buildedAt: 1990,
                repaired: true,
                address: {
                    number: 150,
                    street: {title: 'Gagarin Street'}
                }

            },
            {
                id: 3,
                buildedAt: 2018,
                repaired: false,
                address: {
                    number: 200,
                    street: {title: 'Sunflower Street'}
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 20000,
                stuffCount: 200,
                address: {
                    street: {title: 'Central Street'},
                    number: 250
                }
            },
            {
                type: 'Fire-Station',
                budget: 1000,
                stuffCount: 100,
                address: {
                    street: {title: 'Unnamed road'},
                    number: 250
                }
            }
        ],
        citizensNumber: 100000
    }
});

test.skip('Houses should be destroyed', () => { //Тест на паузе
    demolitionHouses(city, 'Happy Street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(2)
    expect(city.houses[1].id).toBe(3)
})

test('List of streets titles of houses', () => {
    let housesSunflower = getHousesOnTheStreet(city, 'Sunflower Street')

    expect(housesSunflower.length).toBe(1)
})

test("Buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 150)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('Hospital')
})