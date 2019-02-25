# **Templating and Serverside Rendering**

## **Server-Side Rendering**
Server-side rendering is the most common method for displaying information onto the screen. It works by converting HTML files in the server into usable information for the browser.

![](https://cdn-images-1.medium.com/max/1600/1*jJkEQpgZ8waQ5P-W5lhxuQ.png)

Whenever you visit a website, your browser makes a request to the server that contains the contents of the website. The request usually only takes a few milliseconds, but that ultimately depends on a multitude of factors:
```
* Your internet speed
* the location of the server
* how many users are trying to access the site
* and how optimized the website is, to name a few
```
Once the request is done processing, your browser gets back the fully rendered HTML and displays it on the screen. If you then decide to visit a different page on the website, your browser will once again make another request for the new information. This will occur each and every time you visit a page that your browser does not have a cached version of.

<hr>

## **Server-Side Rendering vs Client-Side Rendering**
![SSR-vs-CSR](https://cdn-images-1.medium.com/max/1600/0*SnBCpaOXrQFYdFU6.)

### **Server-Side Pros** :
```
1- Search engines can crawl the site for better SEO.

2- The initial page load is faster.

3- Great for static sites.
```
### **Server-Side Cons** :
```
1- Frequent server requests.
2- An overall slow page rendering.
3- Full page reloads.
4- Non-rich site interactions.
```

### **Client-Side Pros** :
```
1- Rich site interactions
2- Fast website rendering after the initial load.
3- Great for web applications.
4- Robust selection of JavaScript libraries.
```

### **Client-Side Cons** :
```
1- Low SEO if not implemented correctly.
2- Initial load might require more time.
3- In most cases, requires an external library.
```

<hr>

## **Problems Do Templating Languages Solve**
Templating Languages
allows the reuse of the static elements of a web page, while allowing the dynamic elements to be defined based on the parameters of the web request. Web templates are also used in the creation of static content, providing a basic structure and appearance characteristic for web content.
```
* Splits your code into an application code and presentation code.
* Template inheritance.
* Simpler and easier to read syntax.
* Autosecaping of variables
```