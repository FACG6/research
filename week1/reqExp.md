# Reqular Expression

Regular expressions are patterns used to match character combinations in strings.egular expressions are also can create object by ReqExp. These patterns are used with the exec and test methods of RegExp . and with the match, replace, search, and split methods of String.

#creations:

You construct a regular expression in one of two ways:
1-Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
```javascript
var pattern = /ab+c/; 
```
provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.
2-calling the constructor function of the RegExp object, as follows:
```javascript
var pattern = new RegExp('ab+c');
```

#repition

1-* Matches the preceding expression 0 or more times 
exapmle: /ex*/ matches 'example' in "A good example",
but nothing in "bad choice"

2-+ Matches the preceding expression 1 or more times 
example: /b+/ matches the 'b' in "banana" and all the b's in "bbbbnana", 
but nothing in "nana". 

3-? Matches the preceding expression 0 or 1 time example : /gr?up/ matches the 'gru' in "grup" and the 'group" in "group one".

4-. matches any single character except the newline character.example : /.n/ matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.

#advance group

making group by Parentheses group the regex between them. They capture the text matched by the regex inside them can defin the number of group by {number} and cand mke the range of number by {start number ,end number} making group at least start number and not up of end number. example : (abc){3} matches abcabcabc. First group matches abc.

#online tools

found on-line tools forexample https://regex101.com/
