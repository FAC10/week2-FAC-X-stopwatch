# week2-FAC-X-stopwatch

## User stories:

As a software developer wanting to accurately predict how long a coding task takes to complete

>I want to time how long I have been working on a task
So that in the future I know how much time to estimate.


As a software developer who needs to take breaks to walk her dog,

>I want to be able to pause the time and start it again
So that I can still exactly how many working minutes was spent on a project.


As a software developer with new projects,

> I want to be able to clear the stopwatch and restart it
So that I can time my next project(s) accurately.

As a developer with a 🐶 ,

> I need to reminded at every four hours to walk my dog
So that my dog is happy


# Blanket JS

Things not to do when using a server:

## Error 1
Wouldn't work until we installed package.JSON, which we took from dwyl's TDD Workshop. Turns out it had waaaaay more dependencies than we needed, we just needed the live server.

### Error 2
We installed Blanket and got server running, but nothing displayed on page
> by default the server displays index.html, so we changed the URL to point to the correct file

### Error 3
Blanket still wasn't displaying, as we hadn't added the data-cover attribute/ followed instructions.
> moral? always read the first 1/2 page of documentation


# Testing
Asking for a friend 🤔 : why does wrapping tests in a module affect the functionality of our tests?

Lessons learnt:
* try to make tests as simple as possible
* don't try to test whole blocks of logic at once
* write tests that you can easily write functions for (i.e. break it down)
* don't replicate your functions in your tests (which of course you would never do, as we never write functions before tests 🤘)


# Implementation
Don't let your valuable variables get stuck in a function!
