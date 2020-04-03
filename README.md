# Sunny-Side-Cooking
Comp 1800 Group 36
* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application allows users to add, search for and review cooking recipes. 
First the user must login. Then they can search for recipes by ingredients using the searchbar 
on the main menu. The search result will show all recipes with matching ingredients on a separate page.
Viewed recipes can be reviewed and the ratings they receive will be shown on the recipe page after submission.
Users can upload recipes by using the upload button located on the nav-bar. Before the submission, a mock-up
of the recipe will appear and allow for editing before final submission. A user profile page is used to keep
track of the user's level, experience points and contributor counter. Each time a user uploads or reviews a recipe
they would gain experience and increase their upload/review counts.

This small project demonstrates:
* read and write to firestore, a non-sql database
* use of firebase authentication and creation of a users collection in firestore
* customized user experience after login/signup
* storing and displaying user experience points
* display of a user's history of events (counter for upload and reviews/ experience)
* using search queries to do database queries
* using asynchronous call back to evaluate information from database
* combining bootstrap and css to create uniquely themed pages 
* generate dynamic bootstrap cards based on documents read from database
* use of navbar in boostrap

	
## Technologies
Technologies that were used for this project:
* Firebase Hosting
* Firebase Firestore Database
* HTML, CSS
* JavaScript
* Bootstrap 
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── 404.html                 # File for error
├── account.html             # displays user stats and contributions
├── index.html               # landing HTML file
├── login.html               # login HTML file
├── main.html                # after logged in, you can make search results for recipes
├── recipe.html              # displays the recipe chosen from the result page. Shows review ratings
├── review.html              # reviews the recipe from recipe page
├── reviewcomplete.html      # confirms that the review has been submitted and rewards experience
├── searchresult.html        # shows the results from the database query
├── upload1.html             # allows you to enter data to create a cooking recipe
├── uploadcomplete.html      # confirms that the upload has been submitted and rewards experience
├── uploadrecipe.html        # shows you a mock up of the recipe page that will appear in search
└── README.md

It has the following subfolders:
├── .firebase                # Folder for firebase
├── .git                     # Folder for git repo
├── images                   # Folder for images
	/chef.png				 # Account page stock profile picture. Taken from https://www.pinterest.com
	/foodhold.jpg 			 # Placeholder picture for all recipe page images. Taken from https://www.fiverr.com
	/logo_navbar.png		 # Logo image used on all nav-bars and footers. Commissioned by Francis Sapanta
	/logo_nobg_small.png	 # Placeholder image for all search result cards. Also used for upload complete page. Comisssioned by Francis Sapanta
	/slide1.png				 # Placeholder image for jumbotron images. One of two, taken from https://www.delish.com
	/slide2.png				 # Placeholder image for jumbotron images. Two of two, taken from https://www.wallpaperflare.com
├── scripts                  # Folder for scripts
    /account.js              # This is where all account.html functions are located
	/firebase_api_sunnyside.js 	# This is the file that accesses the firebase api for sunny side cooking
	/main.js              	 # This is where all the main.html functions are located
	/recipe.js               # This is where all the recipe.html functions are located
	/results.js              # This is where all the searchresult.html functions are located
	/review.js               # This is where all the review.html functions are located
	/reviewcomplete.js       # This is where all the reviewcomplete.html functions are located
	/upload.js               # This is where all the upload1.html functions are located
	/uploadcomplete.js       # This is where all the uploadcomplete.html functions are located
	/uploadrecipe.js         # This is where all the uploadrecipe.html functions are located
├── styles                   # Folder for styles
	/account.css         	 # This is where all the account.html styling is located
	/landing.css             # This is where all the index.html styling is located
	/main.css                # This is where all the main.html syling is located
	/recipe.css              # This is where all the recipe.html styling is located
	/review.css              # This is where all the review.html and reviewcomplete.html styling is located
	/searchresult.css        # This is where all the searchresult.html styling is located
	/upload.css         	 # This is where all the upload1.html, uploadcomplete.html and uploadrecipe.html styling is located

Firebase hosting files: 
├── .firebaserc              # Firebase file
├── firebase.json            # Firebase file
├── firestore.indexes.json   # Firebase file
├── firestore.rules          # Rules for read/write to firestore
