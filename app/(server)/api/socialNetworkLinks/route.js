import { NextResponse } from "next/server";
import path from "path";
import sqlite3 from "sqlite3";

const dbPath = path.join(process.cwd(), "app", "(server)", "db", "dazerothPortfolio.db");

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

let sql;
sql = `SELECT * FROM socialNetworkLinks`;

export async function GET() {
    return new Promise((resolve, reject) => {
        db.all(sql, [], (error, element) => {
            if (error) return reject(error);

            resolve(NextResponse.json(element));
        });
    });
};