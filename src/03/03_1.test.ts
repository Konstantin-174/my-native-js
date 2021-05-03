import {CityType} from '../02/02_1';
import {addMoneyToBudget, createMessage, repairHouse, toFireStuff} from './03';

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

test("Budget should be changed for Hospital", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(120000)
})

test("Budget should be changed for Fire-Station", () => {
    addMoneyToBudget(city.governmentBuildings[1], 100000)

    expect(city.governmentBuildings[1].budget).toBe(101000)
})

test("House should be repaired", () => {
    repairHouse(city.houses[0]);
    expect(city.houses[0]).toBeTruthy();
})

test("Staff of Fire-Station should be increased", () => {
    toFireStuff(city.governmentBuildings[1], 20);

    expect(city.governmentBuildings[1].stuffCount).toBe(80);
})

test ('Message for citizens should be correct', () => {
    const message = createMessage(city);

    expect(message).toBe(`Hello citizens of ${city.title}! I want each of the ${city.citizensNumber} will be successful!!!`)
})