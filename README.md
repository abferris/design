# DESIGN CHALLENEGE 1: SASS Design Scaffold
April 22, 2019  
Author: Aaron Ferris  
  
Take the basic file, and add SASS to make it look good.
  
# DESIGN CHALLENEGE 2: SASS Design Scaffold
April 22, 2019  
Author: Aaron Ferris  
  
Create a new mixin, under core, called nav
Create the following navigation rules:
Target: nav in the page header (direct child of #root > header)
Assume <ul> <li> structure, perhaps with nesting
Style horizontally in the header nav
Positioned (by rule or by mixin) vertically top, bottom, center and horizontally left, right, center
Hide nested <ul> <li> trees until hover
If there is a 3rd or lower level, hide those as well
implement as a fly-out
Provide a minimum 44px square tap target
Style nicely
Hover States, Indicators, Animations, etc.
Use _variables and _mixins wherever possible to provide more means of differentiation and styling options
Implement responsive options
Hamburger/Flyout
Convert to drop down
Body Navigation
Target: nav anywhere under <main>
The use case here is navigation on the left or right side of a page, perhaps as “sub” or “section” navigation
Folow the same rules as for header, but with options more suited to an in-content flow layout (perhaps vertical)
Think of options for navigation as both a sidebar, and even within a horizonal area (like a carousel)
  
# DESIGN CHALLENEGE 3: SASS Design Scaffold
April 22, 2019  
Author: Aaron Ferris  
  
Given an HTML form with standardized, semantic form markup, apply basic styles for optimal usability
<form />
<fieldset /> <Legend />
<label />
<input />
Radio and Checkbox
<select />
Do not style the fields themselves. Focus on form layout for both top-down and ltr forms.
Provide layout classes (i.e. ‘horizontal’, ‘address’) for extensibility
  
# DESIGN CHALLENEGE 4: SASS Design Scaffold
April 22, 2019  
Author: Aaron Ferris  
  
Work in a fork of your “sass-design” repository in your github account
Create a new component called List with the following requirements:
[x] Accepts a property called items which is an array of data to render
[x] Accepts a property indicating what type of list this is (ordered, unordered, etc)
[]Accepts a property indicating what style of list (this is visual)
Generate the correct JSX and SASS to render the elements from items in proper semantic tags.
Write styles/sass modules designed to style your list correctly based on options sent in with props.
  

## Challenge Links
Created with CodeSandbox  
[sandbox results](https://ykk0x7xwn1.codesandbox.io/)  
[most recent sandbox](https://codesandbox.io/s/github/abferris/design/tree/csb-1555972487062/)  
[PR request](https://github.com/codefellows-js-401d29-aaron-ferris/design/pull/1)
