export interface IRepositoryBase<T, S = T> {
    
    GetEntity(id: number, source?: S): Promise<T>;
    GetEntityBy(entity: Partial<T>, source?: S): Promise<T>;
    AddEntity(entity: T, source?: S): Promise<void>;
    AddMany(entity: T[], source?: S): Promise<void>;
    Update(entity: T, source?: S): Promise<void>;
}