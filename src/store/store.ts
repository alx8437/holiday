// Holiday Types
export type HolidayItemType = {
    id: string
    category: string
    text: string
    date: string
}

// Users Types
export type UserContactsType = {
    phone: string
    email: string
}
export  type UserType = {
    id: string,
    name: string,
    contacts: UserContactsType
}

//Profile Types
export type ProfileDateType = {
    data: string,
    time: string
}
export type ProfileEventType = {
    id: string,
    category: string
    allocation: string
    date: ProfileDateType
    text: string,
    phone: string,
    email: string
}
export  type ProfileType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar: string
    event: Array<ProfileEventType>
}

// State Types
export type StateType = {
    holidaysCollection: Array<HolidayItemType>
    users: Array<UserType>
    profile: ProfileType
}

// Store Types
export type StoreType = {
    state: StateType
}

let store: StoreType = {

    state: {
    holidaysCollection: [
        {id: "1", category: "new year", text: "text congratulation", date: "date"},
        {id: "2", category: "programming day", text: "text congratulation", date: "date"},
    ],
    users: [
        {id: "1", name: "Vasya", contacts: {phone: "56756764", email: "asdasd@mail.ru"}}
    ],
    profile: {
        id: "1",
        firstName: "asd",
        lastName: "lastName",
        email: "asd@mail.ru",
        phone: "907233232",
        avatar: "url ava",
        event: [
            {id: "1", category: "new year", allocation: "wife", date: {data: "Date", time: "time"} , text: "text", phone: "to whom send", email: "email"}
        ],
    }
}

}
