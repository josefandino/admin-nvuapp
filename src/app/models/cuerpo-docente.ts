export interface CuerpoDocenteI {
  uid: string;
  nameFull: string;
  document: string;
  age: number;
  countryOfResidence: string;
  homeCity: string;
  address: string;
  designacion: string;
  phone: string;
  email: string;
  dateEntry: string;
  avatar: string;
  usurname: string;
  codeDocente?: string;
  password: string;
  note: string;
  dateCreated: string;
  profile: 'teacher';
}
