import {CityType} from "../02/02_02";
import {expect} from "vitest";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 200, street: {title: "Hogwarts street"}}
            },
        ],
        governmentBuildings: [
            {type:"HOSPITAL", budget: 200000, staffCount: 200,
            address: {number: 200, street: {title: "Central Str"}}
            },
            {type:"FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "Souths park str"}}
            },
        ],
        citizensNumber: 1000000
    }
})

test("Budget should be change for Hospital", () => {
    addMoneyToBudget(city.governmentBuildings[0],100000 )

    expect(city.governmentBuildings[0].budget).toBe(300000)
})


test("Budget should be change for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("Houses should be repared", () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be increased", ()=>{
    toFireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be repared", ()=>{
    toHireStaff(city.governmentBuildings[0],20)
    toHireStaff(city.governmentBuildings[1],100)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test("Greeting Message should be correct", ()=>{
    const massage = createMessage(city)

    expect(massage).toBe("Hello New York citizens. I want you be happy. All 1000000 men")
})