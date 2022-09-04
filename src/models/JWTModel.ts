export interface JWTModel {
  iat: number;
  exp: number;
  user: UserJWT;
}

export enum UserRoles {
  ADMIN = "ADMIN",
  USER = "USER",
  ADMINISTRATOR = "ADMINISTRATOR",
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  role: UserRoles;
  email: string;
  password: string;
  createdAt: string;
}

export type UserJWT = Omit<User, "password" | "createdAt">;
