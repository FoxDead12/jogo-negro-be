import { IRepositoriesFactory } from "src/interface-layer/interfaces/factories/IRepositoriesFactory";

export abstract class BaseBusinessFactory {

    constructor(
        private _repositoriesFactory : IRepositoriesFactory
    ) {}

    async BeginChanges(): Promise<string> {
        const transactionId = `Transaction_${new Date().getTime()}`;
        await this._repositoriesFactory.BeginChanges(transactionId);
        return transactionId;
    }

    async SaveChanges(transaction: string): Promise<void> {
        await this._repositoriesFactory.SaveChanges(transaction);
    }

    async RollbackChanges(transaction: string): Promise<void> {
        await this._repositoriesFactory.RollbackChanges(transaction);
    }

    async RealiseChanges(transaction: string): Promise<void> {
        await this._repositoriesFactory.RealiseChanges(transaction);
    }

    
}