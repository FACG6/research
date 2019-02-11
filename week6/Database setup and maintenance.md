# Database setup and maintenance
 > Built script, is the command we use to build our database:
 

```javascript 
 const sql = fs.readFileSync(sqlPath).toString();
``` 

> So the built script is used to build our (db_build.sql) file
and this build script has to pass within a connection func.


```javascript
dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log('Users table created with result: ', res);
});
```
#### That will create a connection within pool.

<hr>
 
 
 ## What is database migration?
 > In software engineering, Database migration refers to the management of incremental, reversible changes to relational database schemas. A database migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version.
> Migrations are performed programmatically by using a schema migration tool. When invoked with a specified desired schema version, the tool automates the successive application or reversal of an appropriate sequence of schema changes until it is brought to the desired state.
Most schema migration tools aim to minimize the impact of schema changes on any existing data in the database. Despite this, preservation of data in general is not guaranteed because schema changes such as the deletion of a database column can destroy data (i.e. all values stored under that column for all rows in that table are deleted). Instead, the tools help to preserve the meaning of the data or to reorganize existing data to meet new requirements. Since meaning of the data often cannot be encoded, the configuration of the tools usually needs manual intervention.


### __db-migrate modules__
 * As Global
   1. Installation
      ```
      $ npm install -g db-migrate
      ```
   2. DB-Migrate is now available to you via:
         ```
         $ db-migrate
         ```
* As local module
    1. Want to use db-migrate as local module?
        ```
        $ npm install db-migrate
        ```
    2. DB-Migrate is now available to you via:
       ```
       $ node node_modules/db-migrate/bin/db-migrate
       ```



     
  
