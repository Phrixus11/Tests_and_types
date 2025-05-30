export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildings = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: Array<GovernmentBuildings>
    citizensNumber: number
}