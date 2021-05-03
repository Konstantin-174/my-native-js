import {StudentType} from '../02/02';
import {addSkill, doesStudentLives, makeStudentActive} from './03';

let student: StudentType;

beforeEach(() => {
   student = {
        id: 1,
        name: 'Dimych',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'JS'}
        ]
    }
})

test('Skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'React');

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("React")
    expect(student.technologies[3].id).toBeDefined() //хотим узнать что id определен, но какой id внутри неважно
});

test("Student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("Is student living in this city?", () => {
    let result1 = doesStudentLives(student, 'Moscow')
    let result2 = doesStudentLives(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})