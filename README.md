# LocalizeRouterAndSubRouting

This example is made to demonstrate an unexpected behaviour of the localize-router package with subrouting.

The application use 3 languages : english (default), french and ducth

Structure
* Application
  * Animals
    * Cats
    * Canids
  * Objects

Start the application with `npm i` and `ng serve`.

At the first level of routing (animals vs objects), everything is OK : 
- you can browse between /en, /en/animals and /en/objects => no problem.
- you can switch language between fr, en, nl => no problem.
- you can refresh the page when you are on any page (/en/animals, /fr/animaux, /nl/objecten) => no problem.

Everything is working great !  Nice job.  :-)


At the second level of routing, at the first look, it seems to works well...  But, it doesn't.

1) Go to animals/canids (or animals/cats) and switch the current language :
You are redireted to /animals.

2) (More important) Go to animals/canids (or animals/cats) with an other language than english and refresh the page :
You get "Error: Cannot match any routes".

In english there is no error, because route tranlations are the same the orginal routes ("canids" is translated "canids" in english...)


