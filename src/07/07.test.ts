import {PropsType} from './Destructuring';

let props: PropsType;

beforeEach(() => {
    props = {
        id: 1,
        name: 'Vasya',
        age: 30,
        isActive: false,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Sunflower St.'
            }
        }
    }
})

test('Should be correct', () => {
    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(30)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Sunflower St.')
})

test('', () => {
    // const lesson1 = props.lessons[0]
    // const lesson2 = props.lessons[1]
    const [lesson1, lesson2] = props.lessons

    expect(lesson1.title).toBe("1")
    expect(lesson2.title).toBe("2")
})