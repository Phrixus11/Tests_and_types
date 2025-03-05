import {StudentType} from "../02/02";
import {CityType, GovernmentBuildings, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(sum(1, 3), sum(2, 3))

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function makeStudentActive(s:StudentType) {
    s.isActive = true;
}

export function doesStudentLiveIn(s:StudentType,city:string ) {
    return s.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildings, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export function toFireStaff(building: GovernmentBuildings, number: number) {
    building.staffCount  -= number
}


export function toHireStaff(building: GovernmentBuildings, number: number) {
    building.staffCount  += number
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}