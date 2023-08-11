import { NextResponse } from "next/server";
import path from "path";
import sqlite3 from "sqlite3";

const dbPath = path.join(process.cwd(), "app", "(server)", "db", "dazerothPortfolio.db");

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

let sql;
sql = `SELECT * FROM portfolioList`;

export const GET = async () => {
    return new Promise((resolve, reject) => {
        db.all(sql, [], (error, element) => {
            if(error){
                reject(error);
                return;
            };

            resolve(NextResponse.json(element));
        });
    });
};