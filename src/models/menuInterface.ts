export interface MenuInterface {
  id: number;
  name: string;
  description: string;
  urlImage: string;
  idRestaurant: number;
  price: number;
  imageBase64: string;
}

export interface Food {}

export interface Base64 {
  base: string;
  name: string;
}
