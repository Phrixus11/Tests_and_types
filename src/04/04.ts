const ages = [10,20,22,1,100,98,14]

const predicate = (age: number) =>  age > 90

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title:'CSS', price: 110},
    {title:'JS', price: 200},
    {title:'REACT', price: 150},
]

function cheapPredicate(course:CourseType) {
    return course.price < 160
}

const cheapCoureses = [
    {title:'CSS', price: 110},
    {title:'REACT', price: 150},
]