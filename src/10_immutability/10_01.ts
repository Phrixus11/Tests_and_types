export type UserType = {
    name: string;
    hair: number;
    address: { city: string, house?: number };
};

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ title: string, id: number }>
}

export function makeHairstyle(u: UserType, power: number) {
    // const copy = {...u}
    // copy.hair = u.hair / power;
    const copy = {...u, hair: u.hair / 2} // тоже самое
    // const copy = {hair: u.hair / 2, ...u} // так работать не будет, дестуктуризация затрет новое значение

    return copy;
}

export function moveUser(u: UserWithLaptopType, title: string) {

    // const copy = {...u, address: {...u.address, city: title}}

    return {...u, address: {...u.address, city: title}};
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {

    // const copy = {...u, address: {...u.address, city: title}}

    return {...u, address: {...u.address, house: house}};
}

export function uppgradeUserLaptop(u: UserWithLaptopType, title: string) {

    return {...u, laptop: {...u.laptop, title: title}};
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, arrBooks: Array<string>) {

    return {...u, books: [...u.books, ...arrBooks]};
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldbook: string, newbook: string) {

    return {...u, books: u.books.map(b => b === oldbook ? newbook : b)};
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {

    return {...u, books: u.books.filter(b => b !== book)};
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType, company: string) {

    return {...u, companies: [...u.companies, {id: 3, title: company}]};
}

export function updateCompany(u: WithCompaniesType, id: number, company: string) {

    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title: company} : c)}; // возврат копии с с измененым title
}

export type companiesType = {
    [key: string]: usersCompaniesType[]
}

type usersCompaniesType = { id: number, title: string }


export function updateCompanyTitle(companies: companiesType, userName: string, companyId: number, newTitle:string) {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c=> c.id === companyId ? {...c, title:newTitle } : c);

    return companyCopy
}