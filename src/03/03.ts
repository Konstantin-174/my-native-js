import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingsType, HouseType} from '../02/02_1';

export function sum(a: number, b: number) {
    return a + b;
}
// === WORKING WITH STUDENT ===
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: 4,
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLives = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

// === / WORKING WITH STUDENT ===

// === WORKING WITH CITY ===
export const addMoneyToBudget = (b: GovernmentBuildingsType, budget: number) => {
    return b.budget = b.budget + budget
}

export const repairHouse = (h: HouseType) => {
    return h.repaired = true
}


export const toFireStuff = (s: GovernmentBuildingsType, stuff: number) => {
    return s.stuffCount = s.stuffCount - stuff;
}

export const createMessage = (props: CityType) => {
    return `Hello citizens of ${props.title}! I want each of the ${props.citizensNumber} will be successful!!!`
}
// === / WORKING WITH CITY ===