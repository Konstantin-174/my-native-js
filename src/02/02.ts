export type TechnologyType = {
    id: number
    title: string
}

export type LocalCityType = {
    title: string
    countryTitle: string
}

export type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologyType>
}

const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS"}
    ]
}

console.log(student.technologies[2].title)


