# Detailed Component Breakdown

- App.js
    
    - Routes Renderer (React Router)
        **He**: Header (Nav Bar)
        **Fo**: Footer (Nav Bar at bottom)
        **Ma**: Main section or component?
\-------------------------------------------------------		
    
    **He**
-    _Logo_: \- img anchor for logo/ logo can be class name if using font awesome/ bootstrap
-   _Team Link_: Clickable that will route to Team Page.
    `<Link> </Link`
-	 _List Link_: Clickable that will route to List Page.
    `<Link> </Link`
-    *Home Link*:
    `<Link> </Link`        
\--------------------------------------------
	
   **Fo**
    Newsletter Input Field: A form with an inputfield for user email.
       ```
            <form>
                <input type="email">
            </form>
    ```
    
   _Contact Link_: Clickable that will route to Contact form.
    ```
    <Link> </Link>
	```
  
 Or we can make it a React Modal which pops up and will be information to contact
   - Possible Modal:
  	 -	 Contact info:
   			-	 email
    		-    phone number

\-----------------------------------------------    
Main.JS
	**Ma**: Main Component
	**Ho**: Home Page Component
	**Car**: Cart Component
	**Tea**: Team Page Component
**Ma**
-	Will Render 3 components and host API calls
	(only if it is a component,
	if it is just a section
	API calls will be hosted elsewhere)

\------------------------------------------------
-	**Ho**
 	 -	 3 ``` <Link></Link>``` tags
 	 -	 Link tags have background images 
	-	Background image set by css.
	-	Link tags surrounded by divs for backgound images

\---------------------------------------------------

-	**Car**: An n number of cards for products selected/ Wish List
	-	In an array possibly
		-	_Card_: Example
```
<div>
	<img src="Some product image"/>
	<p>Description/Price</p>
	<a>Add to Cart</a>
</div>
```

- **Tea**: An about us page utilizing the same card template
	- An array of Cards with img, description, link to github/linkedIN