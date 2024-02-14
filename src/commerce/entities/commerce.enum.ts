export enum CollectionType {
  Business = 'Business',
  Discover = 'Discover'
}

export enum BusinessType {
  Restaurant = 'Restaurant',
  Shop = 'Shop',
  Bar = 'Bar',
  Cafe = 'Cafe',
  Hotel = 'Hotel',
  GuestHouse = 'GuestHouse',
  JwajemShop = 'JwajemShop',
  JuiceShop = 'JuiceShop',
}

export enum DiscoverType {
  Landmark = 'Landmark',
  RoofTop = 'RoofTop',
  Mansion = 'Mansion',
  Activity = 'Activity',
}

export const CommerceType = { ...BusinessType, ...DiscoverType }
