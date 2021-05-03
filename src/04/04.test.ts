import {chipPredicate, CourseType} from './04';

test("Should take men older then 90", () => {
    const ages = [12, 23, 43, 50, 89, 90, 100]

    const oldAges = ages.filter((age: number) => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("Should take courses chipper then 160", () => {
    const courses: Array<CourseType> = [
        {title: 'HTML', price: 110},
        {title: 'JS', price: 150},
        {title: 'React', price: 350},
    ]

    const chipCourses = courses.filter(chipPredicate)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("HTML")
    expect(chipCourses[1].title).toBe("JS")
})

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

let tasks: Array<TasksType>;

beforeEach( () => {
    tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Beer", isDone: true},
        {id: 3, title: "Milk", isDone: false},
        {id: 4, title: "Fish", isDone: true}
    ]
})

test("Get only completed tasks", () => {

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test("Get only uncompleted tasks", () => {

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})