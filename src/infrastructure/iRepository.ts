import { DeleteResult } from "typeorm";

export interface IRepository<T> {
  create(obj: T): Promise<T>,
  
  update(obj: T): Promise<T>;
  
  delete(obj: T): Promise<DeleteResult>;
  
  getOne(id: number): Promise<T>;
  
  getAll(): Promise<T[]>;
}