export interface IBaseRepositoriesFactory {

    BeginChanges(transaction: string): Promise<void>;
    SaveChanges(transaction: string): Promise<void>;
    RollbackChanges(transaction: string): Promise<void>;
    RealiseChanges(transaction: string): Promise<void>;
}