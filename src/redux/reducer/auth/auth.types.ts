export type AuthSliceTokenT = string | null;
export type AuthSliceIsEditorT = boolean;
export type AuthSliceGuestMode = boolean;

export interface AuthSliceI {
  token: AuthSliceTokenT;
  isEditor: AuthSliceIsEditorT;
}
