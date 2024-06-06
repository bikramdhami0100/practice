
import mysql from 'mysql2/promise';

 export const DbConnectionwithquery=async(query:any)=>{
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        database: 'college',
        password:""
      });
      try {
        const [results, fields] = await connection.query(
          query
        );
      return results;
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
      } catch (err) {
        console.log(err);
      }
      
 }

 

