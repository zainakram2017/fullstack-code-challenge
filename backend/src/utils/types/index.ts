export type DatabaseConfig = {
    DATABASE_URL: string;
}

export type Secret = {
    port: string;
    dbConfig: DatabaseConfig;
}