export interface IRepository<T> {
  create(obj: T): Promise<T>,
  
  update(obj: T): Promise<T>;
  
  delete(obj: T): Promise<T>;
  
  getOne(id: number): Promise<T>;
  
  getAll(): Promise<T[]>;
}