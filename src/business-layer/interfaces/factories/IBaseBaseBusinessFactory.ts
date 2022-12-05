export interface IBaseBaseBusinessFactory {

    BeginChanges(): Promise<string>;
    SaveChanges(transaction: string): Promise<void>;
    RollbackChanges(transaction: string): Promise<void>;
    RealiseChanges(transaction: string): Promise<void>;
}