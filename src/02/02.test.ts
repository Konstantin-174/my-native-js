import {CityType} from './02_1';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy Street'}
                }
            },
            {
                buildedAt: 1990,
                repaired: true,
                address: {
                    number: 150,
                    street: {title: 'Gagarin Street'}
                }

            },
            {
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
                    street: {title: "Central Street"},
                    number: 250
                }
            },
            {
                type: 'Fire-Station',
                budget: 1000,
                stuffCount: 100,
                address: {
                    street: {title: "Unnamed road"},
                    number: 250
                }
            }
        ],
        citizensNumber: 100000
    }
});

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('Happy Street')

    expect(city.houses[1].buildedAt).toBe(1990)
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].address.number).toBe(150)
    expect(city.houses[1].address.street.title).toBe('Gagarin Street')

    expect(city.houses[2].buildedAt).toBe(2018)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(200)
    expect(city.houses[2].address.street.title).toBe('Sunflower Street')
})

test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('Hospital')
    expect(city.governmentBuildings[0].budget).toBe(20000)
    expect(city.governmentBuildings[0].stuffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Street')

    expect(city.governmentBuildings[1].type).toBe('Fire-Station')
    expect(city.governmentBuildings[1].budget).toBe(1000)
    expect(city.governmentBuildings[1].stuffCount).toBe(100)
    expect(city.governmentBuildings[1].address.street.title).toBe('Unnamed road')

})