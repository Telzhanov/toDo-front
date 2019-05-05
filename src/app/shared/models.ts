export interface ITaskList {
  id: number;
  name: string;
}

export interface ITaskShort {
  id: number;
  name: string;
  status: string;
}

export interface ITaskLong {
  id: number;
  name: string;
  created_at: string;
  due_on: string;
  status: string;
}

export interface ITaskCreated {
  id: number;
  name: string;
  created_at: string;
  due_on: string;
  status: string;
  task_list: ITaskList;
}

export interface IUserRequest {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

export interface IUserResponse {
  token: string;
  user: User;
}


