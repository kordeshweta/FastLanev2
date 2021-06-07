import { Role } from './role';

export class User {
  id: number;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
