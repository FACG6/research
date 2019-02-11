## What is a Key-Value Database?
A key-value database (also known as a key-value store and key-value store database) uses a simple key/value method to store data.

The key-value part refers to the fact that the database stores data as a collection of key/value pairs. This is a simple method of storing data, and it is known to scale well.

### The Key: 
The key in a key-value pair must (or at least, should) be unique. This is the unique identifier that allows you to access the value associated with that key.

### The Value
The value in a key-value store can be anything, such as text (long or short), a number, markup code such as HTML, programming code such as PHP, an image, etc.

The value could also be a list, or even another key-value pair encapsulated in an object.

### What can a Key-Value Database be used for?
Key-value databases can be applied to many scenarios. For example, key-value stores can be useful for storing things such as the following.
- General web/computers
- Ecommerce (shopping cards).
- Networking/Data Maintenance.

### Example of key/value
IP Forwarding Table
key           |    value
------------ | -------------
202.45.12.34 | 01:23:36:0f:a2:33

# NO-SQL :

## Document-Based Store:
[click here](http://static.couchbaseinc.hosting.ca.onehippo.com/images/server/3.x/20170420-170703/relational_vs_doc1.png)
 
 [click](http://static.couchbaseinc.hosting.ca.onehippo.com/images/server/3.x/20170420-170703/relating_docs.png)
  a document-oriented database contains documents , which are records that describe the data in the document, as well as the actual data.
As opposed to columns and datatypes a document contains key value pairs. Each document does not have to be in the same structure as other documents.

- data objects are stored as documents; each document stores your data and enables you to update the data or delete it. Instead of columns with names and data types, we describe the data in the document, and provide the value for that description.
 * In the case of document-based data, we would add additional key-value pairs into our documents to represent the new fields.
* The other characteristic of relational database is data normalization ; this means you decompose data into smaller, related tables.

* In the document-oriented database, we could choose to have two different document structures. Instead of splitting your application objects into tables and rows, you would turn them into documents and provide them a reference

## Column-based Store :
![](https://cdn-images-1.medium.com/max/600/1*GGuPUQ1TPDAmJdTlnhtKag.png)
 *  They use a concept called keyspace, which is similar to the schema in a relational model.
 * Column families are similar to tables in a relational model.
 * Each row in a column family has a unique key and each column within the row contains a name, value and time stamp.
![](https://cdn-images-1.medium.com/max/800/1*RUG5NWwiPpuYCRzLvCSaFQ.png)
 ### The benefits of a column based database:
 * data compression.
 * high performance with aggregate functions (SUM, COUNT, etc).


 #### for a Columnar database you would need to write each column one by one. Therefore, Columnar databases are better for processing data with a small number of columns and larger number of rows.