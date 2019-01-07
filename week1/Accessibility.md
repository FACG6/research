

##  Write an accessible navbar
Building an accessible website is a holistic endeavor. In order to provide easy access to the information on each page, myriad factors must be considered. One of the chief amongst these is the creation of accessible navigation. 
### What makes a menu accessible?
Any number of circumstances can effect the usability of your navigation. Inaccessibility is present whenever any user, using any device, is unable to take advantage of the information you are offering. A truly accessible menu will have considered all of these possibilities:

- User agents without Javascript, CSS, or rich media formats (Flash, Java).
Includes some screen readers, search engine spiders, the Lynx browser, and any modern browser where the user has made this choice.

- Users with difficulty reading text.
 Can include dyslexic or autistic visitors, sometimes deaf visitors, and, always, blind visitors.

- Users with difficulty seeing low-contrast colors or certain color contrasts.
Color blindness causes a number of contrast problems, as do many other factors as the eye ages.

- Users with problems seeing small type.
Very common amongst older users or users with degenerative sight syndromes such as Macular Degeneration.

- Conflicts with user agent defaults.
Use of defined accessibility features such as tabindex or accesskeys can create conflicts with the normal behavior of a visitor’s browser. See Accesskeys: Curse or Blessing?

Example:
```html
<ul id="skiplinks">
<li><a href="#content">To Content</a></li>
<li><a href="#navigation">To Navigation</a></li>
<li><a href="#footer">To Footer</a></li>
</ul>
...
<ul id="navigation">
<li><a href="/">Home</a></li>
<li><a href="/news.php">News</a></li>
<li><a href="/bio.php">Biography</a></li>
</ul> 
```
### Styling your Accessible Menu
   ascading style sheets can be a powerful tool to transform your boring accessible navigation into a beautiful navigation menu. They can also be used to transform your boring accessible navigation into a beautiful, inaccessible navigation menu.
_It’s normal, when creating a navigation menu in CSS, to begin by removing bullets._
```css
#navigation {
list-style: none;
margin: 0;
padding: 0;
} 
```
* #### Color Contrast.
    It’s the remaining steps which are more important: selection  of background colors, whether to underline or not, text colors, any use of symbolic cues. The formulas for calculating color contrast values are complex. 
    ``` css
    #navigation a {
    display: block;
    background: #f5f5f5;
    color: #222;
    }

* #### Font Size.
    What’s most important about your default font-size is that it be flexible. Although I encourage the default size to be reasonably readable, it’s most important that you not prevent the user from changing that size. The use of pixels to control your font size will prevent visitors using Internet Explorer 6 from changing the size of your text. All font-sizes should ideally be expressed either in em units or in percentages. With em‘s, the displayed font-size is based relative to the default font-size of the user agent. This puts your visitor in control.


# **Accessible Modal**
>Modal Dialogs are a tricky thing to make accessible. For visual users navigating with a mouse, creating a dialog is as simple as styling the element to look visually different from the rest of the page. However, users navigating a site via a keyboard and/or screenreader need a lot more.
## Managing Focus:
>An application should always have an element with focus when in use, as applications require users to have a place to provide user input. Authors are advised to not destroy the element with focus or scroll it off-screen unless through user intervention. All interactive objects should be focusable. All parts of composite interactive controls need to be focusable or have a documented alternative method to achieve their function, such as a keyboard shortcut. Authors are advised to maintain an obvious, discoverable way, using ther standard navigation techniques, for keyboard users to move the focus to any interactive element. 
When using standard HTML and basic WAI-ARIA widgets, application developers can simply manipulate the tab order or use a script to create keyboard shortcuts to elements in the document. Use of more complex widgets requires the author to manage focus within them.
When the container or its active descendant has focus, the user may navigate through the container by pressing additional keys, such as the arrow keys, to change the currently active descendant. Any additional press of the main navigation key (generally the TAB key) will move out of the container to the next widget.

## Semantic HTML
>Structural, semantic HTML is the key starting point toward good accessibility practices.
When a screen reader, or any sort of assistive device scans a web page, it gets information about the Document Object Model (DOM), or the HTML structure of the page. No styles or JavaScript will be read by a screen reader.
Many screen readers have functionality that allows a user to select to read only the headings on the page, or only the links. Giving precedence to the way headings and links are written is a significant way we can make browsing the web easier for these users.
HTML5 introduced several new semantic elements representing logical sections or components of a web app or document. None of the new elements actually “do” anything by themselves, but they provide a nice way for web authors to define various parts of a document, and open the door for user agents and assistive technologies to use this information to enable alternate ways of viewing and navigating a page.

### Best Practices
>Use Container Elements for Layout Only
Elements like <div> and <span> are for layout only. They’re semantically meaningless, they don’t have keyboard or touch support in any browser, and they don’t communicate anything to the accessibility API. For example, never use a div or span for a button when you could use a semantically meaningful button element.

#### HTML elements to structure every page:
* header
* nav
* main
* article
* aside
* footer

#### Headings
>Use one H1 per page, matching the page title.
Do not skip heading levels when increasing, but you can skip levels when decreasing (h1, h2, h3, h2, h3, h4, h2, h3, h4).
The headings taken out of context should logically represent the page content for screen readers and users who choose this option as a way to scan the page
## aria attribute:
>Taxonomy of WAI-ARIA States and Properties

States and properties are categorized as follows:
1. Widget Attributes
2. Live Region Attributes
3. Drag-and-Drop Attributes
4. Relationship Attributes

#### 1- Widget Attributes:
>attributes specific to common user interface elements found on GUI systems or in rich internet applications which receive user input and process user actions. These attributes are used to support the widget roles.

##### Such as :
* aria-autocomplete.
* aria-checked.
* aria-disabled.
#### 2- Live Region Attributes:
>This section contains attributes specific to live regions in rich internet applications. These attributes may be applied to any element. The purpose of these attributes is to indicate that content changes may occur without the element having focus. Some roles specify a default value for the aria-live attribute specific to that role.

##### Such as:
* aria-atomic
* aria-busy
* aria-live
* aria-relevant
#### 3- Drag-and-Drop Attributes:
>This section lists attributes which indicate information about drag-and-drop interface elements, such as draggable elements and their drop targets. Drop target information will be rendered visually by the author.

##### Such as:
* aria-dropeffect.
* Aria-grabbed.

#### 4- Relationship Attributes:
>This section lists attributes that indicate relationships or associations between elements which cannot be readily determined from the document structure.

##### Such as:
* aria-activedescendant
* aria-colcount
* aria-colindex

