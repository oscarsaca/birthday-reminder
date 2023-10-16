export interface User {
  uid: string;
  firstName?: string;
  lastName?: string;
  email: string;
  notifications?: boolean;
  photoURL?: string;
}
