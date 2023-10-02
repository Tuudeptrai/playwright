// const sql = require("mssql");


// const sqlConfig = {
//   user: "admin",
//   password: "dYd6fqEu4BMmavFt;port=3306;database=squadwarestage",
//   server: "squadwarestage.ckhrdaljtlh9.us-east-2.rds.amazonaws.com",
//   database: "squadwarestage", // name of database
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
//   options: {
//     encrypt: true,
//     trustServerCertificate: true
//   },
// };


// export class DB {
//   async connectDb(query) {
//     try {
//       await sql.connect(sqlConfig);
//       await sql.query(query);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

import { createPool } from 'mysql';
export class DB{
   query(sql) {
    const pool = createPool({
      host: "squadwarestage.ckhrdaljtlh9.us-east-2.rds.amazonaws.com",
      user: "admin",
      password: "dYd6fqEu4BMmavFt",
      database: 'squadwarestage'
    });
    pool.query(sql, (err, results) => {
       return results
      });
  }
  
}


