export interface UsersI {
  uid: string;
  name: string;
  lastname: string;
  document: string;
  age: number;
  country: string;
  phone: string;
  email: string;
  password: string;
  profile: 'studen' | 'teacher' | 'admin';
}
