import mysql, { Pool, PoolConnection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export interface DbConfig {
    host: string | undefined;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
}

export class Database {

    private static instance: Database;
    private pool: Pool;

    constructor(config: DbConfig) {
        this.pool = mysql.createPool(config);
    }

    // Singleton pattern
    public static getInstance(): Database {
        if(!this.instance) {
            const config: DbConfig = {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE
            };

            this.instance = new Database(config);
        }
        return this.instance;
    }

    async getConnection(): Promise<PoolConnection> {
        return await this.pool.getConnection();
    }

    async query(sql: string, args?: any): Promise<any> {
        const connection = await this.getConnection();

        try{
            const [results] = await connection.query(sql, args);
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
