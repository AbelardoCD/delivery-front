export interface JWTModel {
  iat: number;
  exp: number;

  sub: string;
  authorities: { authority: UserRoles };
  firstLogin: boolean;
  created_by_id: number | null;
  id: number;
  masterDownload: boolean;
  days_left_password_expires: number;
}

export enum UserRoles {
  ADMIN = "ROLE_ADMIN",
  USER = "ROLE_USER",
  ADMINISTRATOR = "ROLE_ADMINISTRATOR",
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
