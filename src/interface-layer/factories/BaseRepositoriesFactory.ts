import { DataSource, QueryRunner } from "typeorm";

export abstract class BaseRepositoriesFactory {

    protected _transaction: string;
    protected _runners: {[key: string]: QueryRunner} = {};
    
    constructor(protected _dataSource: DataSource) {
    }
    
    async BeginChanges(transaction: string) {
        
        this._transaction = transaction;
        this._runners[transaction] = this._dataSource.createQueryRunner();
        await this._runners[transaction].connect();
        await this._runners[transaction].startTransaction();
    }

    async SaveChanges(transaction: string) {
        await this._runners[transaction].commitTransaction()
    }

    async RollbackChanges(transaction: string) {
        await this._runners[transaction].rollbackTransaction()
    }

    async RealiseChanges(transaction: string) {
        await this._runners[transaction].release()
    }
}