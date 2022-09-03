export interface MenuInterface {
  food: Food;
  imageBase64: Base64;
}

export interface Food {
  id: number;
  name: string;
  description: string;
  urlImagen: string;
  idRestaurant: number;
  price: number;
}

export interface Base64 {
  base: string;
  name: string;
}
