import {StudentType} from '../02/02';

export function sum(a: number, b: number) {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: 4,
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}