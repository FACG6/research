# Responsive vs mobile-first design:
### in which a website’s design is automatically adjusted based on the size of users’ screens. Thanks to responsive design, users can easily browse a website regardless of what device they use. The site’s layout and content will change based on the width of a browser on a device. Quick tip: You can determine whether or not a website is responsive by manually zooming in and out of the browser window.

### Responsive design means that you only need one website. The design, content, and user interface of your website is adapted so that visitors can seamlessly visit it on any device and any browser. You no longer have to create two versions of a website—one for desktop computers and one for mobile devices. You can always tell if a website has been designed for mobile devices with the URL that starts with a “m,” such as m.facebook.com.

### When a business develops its website, the design is often based on the assumption that visitors will browse it on a desktop computer. Then, the website is modified to adapt to different devices, including smartphones and tablets. In other words, the site is scaled down; this approach is widely known as graceful degradation or desktop-first. Unfortunately, many visual aspects and features of a website are optimized for desktop computers—but adapt poorly to mobile devices. This is when designers adapt a new approach called progressive enhancement or a mobile-first strategy. By doing so, they initially design a website for the smallest mobile devices possible and then scale upwards to adapt to desktop computers.


# Write CSS with BEM:
### The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS,its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

# Why use BEM:
### BEM makes your code scalable and reusable, thus increasing productivity and facilitating teamwork. Even if you are the only member of the team, BEM can be useful for you. Nevertheless, many developers believe that such a system approach like BEM puts additional boundaries on their project and makes your project overloaded, cumbersome, and slow.

# Why use classes NOT ID'S:
### The ID provides a unique name for an HTML element. If the name is unique, you can't reuse it in the interface. This prevents you from reusing the code.

# How It Works:

### -includes up to three parts:
### -Block: The outermost parent element of the component is defined as the block. 
### -Element: Inside of the component may be one or more children called elements. 
### -Modifier: Either a block or element may have a variation signified by a modifier. 
```css
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}

/* If all three are used in a name it would look something like this
 [block]__[element]--[modifier]--...
```
# Why should we consider BEM?
### 1-If we want to make a new style of a component, we can easily see which modifiers and children already exist. We might even realize we don't need to write any CSS in the first place because there is a pre-existing modifier that does what we need.
### 2-If we are reading the markup instead of CSS, we should be able to quickly get an idea of which element depends on another (in the previous example we can see that .btn__price depends on .btn, even if we don't know what that does just yet.)
### 3-Designers and developers can consistently name components for easier communication between team members. In other words, BEM gives everyone on a project a declarative syntax that they can share so that they're on the same page.