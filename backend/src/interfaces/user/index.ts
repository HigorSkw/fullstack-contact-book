export interface IUser {
  id: string;
  name: string;
  email: string;
  telefone: string;
  created_at: Date;
  password: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  telefone: string;
  password: string;
}
