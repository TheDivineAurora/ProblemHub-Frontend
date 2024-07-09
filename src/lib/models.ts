export interface User {
    _id: String,
    name : String,
    email: String,
    username: String,
    profileImageUrl: String,
    sheets : String[]
}

export interface Sheet {
    _id: String,
    name : String,
    createdBy : String,
    problems : String[] | Problem[];
}

export interface Problem {
    _id: String,
    naem: String,
    problemUrl: String,
    problemJudge: String,
    problemCode: String
}