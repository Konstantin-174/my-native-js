const ages = [12, 23, 43, 50, 89, 90, 100]

const predicate = (age: number) => age > 90

export type CourseType = {
    title: string
    price: number
}

const courses: Array<CourseType> = [
    {title: 'HTML', price: 110},
    {title: 'JS', price: 150},
    {title: 'React', price: 350},
]

export const chipPredicate = (course: CourseType) => {
    return course.price < 160
}

