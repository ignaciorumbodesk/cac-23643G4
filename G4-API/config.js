import 'dotenv/config';

export const PORT = process.env.PORT || 4000;
export const HOST = process.env.HOST || 'localhost';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_NAME = process.env.DB_NAME || 'funkoshop';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';