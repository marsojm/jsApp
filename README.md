# jsApp

This is my js playground. The idea behind this projects is to build a testable JavaScript front-end. My plan is to separate
the view (view model and html) from the presenter in away that presenter acts as an action messenger between the view and 
the main application (or test suite). In other words, the presenter doesn't know anything about any views, tests or any other
parts of the application. In order to test the front-end, we only need to test the presenter. 
