import {CityType} from '../02/02_1';
import {createMessagesForStreet, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from './05_1';

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

test("List of streets titles of governments buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe("Central Street")
    expect(streetsNames[1]).toBe("Unnamed road")
})

test ("List of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("Happy Street")
    expect(streets[1]).toBe("Gagarin Street")
    expect(streets[2]).toBe("Sunflower Street")
})

test("Create greeting message for street", () => {
    let messages = createMessagesForStreet(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello people from Happy Street")
    expect(messages[1]).toBe("Hello people from Gagarin Street")
    expect(messages[2]).toBe("Hello people from Sunflower Street")
})