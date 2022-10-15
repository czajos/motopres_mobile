export type AuthSliceTokenT = string | null;
export type AuthSliceIsLoggedT = boolean;
export type AuthSliceGuestMode = boolean;

export interface AuthSliceI {
  token: AuthSliceTokenT;
  isLogged: AuthSliceIsLoggedT;
}
