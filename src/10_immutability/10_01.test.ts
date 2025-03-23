import {
    addNewBooks, addNewCompany,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle,
    uppgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";
import {expect} from "vitest";


test("Reference type test", () => {
    let user: UserType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk"},
    };

    const awesomeUser = makeHairstyle(user, 2);

    user.address.city = "Kiev";

    expect(user.hair).toBe(22);
    expect(awesomeUser.hair).toBe(11);
    expect(awesomeUser.address).toBe(user.address);
});

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'}
    };

    const movedUser = moveUser(user, 'Kiev');

    // user = movedUser;

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');


});


test("upgrade laptop to mac", () => {
    let user: UserWithLaptopType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'}
    };

    const UserCopy = uppgradeUserLaptop(user, 'MAC');

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).toBe(UserCopy.address);
    expect(user.laptop).not.toBe(UserCopy.laptop);
    expect(UserCopy.laptop.title).toBe('MAC');
    expect(user.laptop.title).toBe('zenbook');
});


test("upgrade laptop to mac", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'},
        books: ['css', "html", "js", "react"]
    };

    const UserCopy = moveUserToOtherHouse(user, 99);

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).not.toBe(UserCopy.address);
    expect(user.books).toBe(UserCopy.books);
    expect(user.laptop).toBe(UserCopy.laptop);

    expect(user.laptop.title).toBe('zenbook');
    expect(UserCopy.address.house).toBe(99);

});


test("add new book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'},
        books: ['css', "html", "js", "react"]
    };

    const UserCopy = addNewBooks(user, ["ts", 'rest api']);

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).toBe(UserCopy.address);
    expect(user.books).not.toBe(UserCopy.books);
    expect(user.laptop).toBe(UserCopy.laptop);
    expect(user.laptop.title).toBe('zenbook');

    expect(UserCopy.books[4]).toBe("ts");
    expect(UserCopy.books[5]).toBe('rest api');

});

test("update book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'},
        books: ['css', "html", "js", "react"]
    };

    const UserCopy = updateBook(user, "js", "ts");

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).toBe(UserCopy.address);
    expect(user.books).not.toBe(UserCopy.books);
    expect(user.laptop).toBe(UserCopy.laptop);
    expect(user.laptop.title).toBe('zenbook');

    expect(UserCopy.books.length).toBe(4);
    expect(UserCopy.books[2]).toBe("ts");

});

test("remove book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'},
        books: ['css', "html", "js", "react"]
    };

    const UserCopy = removeBook(user, "js");

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).toBe(UserCopy.address);
    expect(user.books).not.toBe(UserCopy.books);

    expect(UserCopy.books.length).toBe(3);
    expect(UserCopy.books[2]).toBe("react");

});


test("add company user", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    };

    const UserCopy = addNewCompany(user, "Google");

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).toBe(UserCopy.address);
    expect(UserCopy.companies.length).toBe(3);
    expect(UserCopy.companies[2].title).toBe('Google');

});

test("update company user", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Daniil",
        hair: 22,
        address: {city: "Minsk", house: 12},
        laptop: {title: 'zenbook'},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    };

    const UserCopy = updateCompany(user, 1, "Google") as UserWithLaptopType & WithCompaniesType // воспинимай UserCopy как user

    // user = movedUser;

    expect(user).not.toBe(UserCopy);
    expect(user.address).toBe(UserCopy.address);
    expect(UserCopy.companies).not.toBe(user.companies);
    expect(UserCopy.companies.length).toBe(2);
    expect(UserCopy.companies[0].title).toBe('Google');

});


test("update company", () => {

    let companies = {
        'Dimich': [{ id: 1, title: 'Epam' }, { id: 2, title: 'IT-INCUBATOR' }],
        'Artem' : [{ id: 2, title: 'IT-INCUBATOR' }]
    }

    let copy = updateCompanyTitle(companies,'Dimich', 1, "asd")

    expect(copy['Dimich']).not.toBe(companies['Dimich']);
    expect(copy['Artem']).toBe(companies['Artem']);
    expect(copy['Dimich'][0].title).toBe("asd");


});