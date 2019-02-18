# Web storage :
## sometimes known as DOM storage  (DOM storage)


> Web storage feature lets you store some information locally on the user's computer, similar to cookies, but it is faster and much better than cookies. However, web Storage is no more secure than cookies. 
The information stored in the web storage isn't sent to the web server as opposed to the cookies where data sent to the server with every request. Also, where cookies let you store a small amount of data (nearly 4KB), the web storage allows you to store up to 5MB of data.
  
  ## There are two types of web storage, which differ in scope and lifetime :
 * Local storage — The local storage uses the localStorage object to store data for your entire website, permanently. That means the stored local data will be available on the next day, the next week, or the next year unless you remove it .

       That mean (The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site).
* Session storage — The session storage uses the sessionStorage object to store data on a temporary basis, for a single window (or tab). The data disappears when session ends i.e. when the user closes that window (or tab).

![](https://files.gitter.im/foundersandcoders/web_storage_research/xQH4/cI5kT.jpg)

### The localStorage Object :
As stated earlier, the localStorage object stores the data with no expiration date. Each piece of data is stored in a key/value pair. The key identifies the name of the information (like 'first_name'), and the value is the value associated with that key (say 'Peter').

* localStorage.setItem(key, value): Stores a value associated with a key.

* localStorage.getItem(key): Retrieves the value associated with the key.
* localStorage.removeItem(key):remove a particular item from the storage by passing the key value to the removeItem() method. 

> However, if you want to remove the complete storage use the clear() method, like localStorage.clear(). The clear() method clears all key/value pairs from localStorage at once, so think carefully before you using it.

### The sessionStorage Object : 
The sessionStorage object work in the same way as localStorage, except that it stores the data only for one session i.e. the data remains until the user closes that window or tab.


[Example](https://www.tutorialrepublic.com/codelab.php?topic=html5&file=session-storage)





