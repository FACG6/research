##Database Schema:
representation structure of a database, a set of rules that control
a database, or to the entire set of objects
represents the logical view of the entire database. It defines how the data is organized and how the relations among them

A database schema can be divided broadly into two categories :
Physical Database Schema − the actual storage of data and its form of storage like files.

Logical Database Schema − This schema defines all the logical constraints that need to be applied on the data stored
Main benefits Database Schema:
It does provide more complexity in programming, in that you must always know which schema you intend to get something from in the begining
_


### primary key:
 * provide a unique identifier to each row in a table. That is why it cannot be null. 
 * The PK is mandatory in order to define a Foreign Key (FK) relationship between a child table and a parent table. 
 * A composite primary key is a set of more than one key that, together, uniquely identifies each record. 
 ## why do we need: 
 * databases use keys to compare, sort, and store records, and to create relationships between records.
  # choosing the primary key in a database is one of the most important steps in the process.
   * It must be entered when a record is created, and it should never be changed primary key after you assign it. 
   * primary key is used for lookups and comparisons so recomended be a short so management system can process it more quickly than a long primary key. * also recomended be number so management systems process number data types faster than character data types.
    * recomended to be simple not embedded spaces, or a mix of upper and lower capitalization.

    

