import React from 'react';

type AddressType = {
    street: StreetType
}

type StreetType = {
    title: string
}

type LessonType = {
    title: string
}

export type PropsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    lessons: Array<LessonType>
    address: AddressType
}

type ManComponentPropsType = {
    title: string
    man: PropsType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<ManComponentPropsType> = ({title, man, ...props}) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}

