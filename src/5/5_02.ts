import {GovernmentBuildings, HouseType} from "../02/02_02";

export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildings>) {
    return buildings.map(b=> b.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: HouseType[]) {
    return houses.map(h=> h.address.street.title)
}

export function createMessages(houses: HouseType[]) {
    return houses.map(h=> `Hello guys from ${h.address.street.title}`)
}