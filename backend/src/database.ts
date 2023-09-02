import { create } from 'domain';
import mysql, { Pool, PoolConnection } from 'mysql2/promise';
import dotenv from 'dotenv';
import { User } from './models/User.js';

dotenv.config();

export interface DbConfig {
    host: string | undefined;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
}

export class Database {
    private pool: Pool;

    constructor(config: DbConfig) {
        this.pool = mysql.createPool(config);
    }

    async getConnection(): Promise<PoolConnection> {
        return await this.pool.getConnection();
    }

    async query(query: string, values?: any): Promise<any> {
        const connection = await this.getConnection();
        try {
            const [results] = await connection.query(query, values);
            connection.release();
            return results;
        } catch (error) {
            connection.release();
            throw error;
        }
    }

    async close(): Promise<void> {
        await this.pool.end();
    }
}
