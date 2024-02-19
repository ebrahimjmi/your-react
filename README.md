# parcel

most powerful features of parcel

1. Zero config -> it is very easy to config in our project
2. Dev server -> it creates development server (http://localhost:1234)
3. Hot reloading -> when any changes on the code bases it reflect on the UI without refresh
4. Diagnostics -> any error in your code it display beautiful error and you can easly understand and find the issue in your code and then fix.
5. Multi-core -> Parcel is designed around a multi-core architecture that parallelizes work across all of your cores and takes full advantage of modern hardware.
6. Reliable caching -> parcel make caches so that the same code is never built twice while restart parcel.
7. Lazy dev builds -> dead code elimination, remove unnecessary code.
8. 


# react app folder structure
  src ->
      components
        header
        body
        footer
      App.js


# two types of export/import

Default export/import

Export Default Component: 
import component from "path"

Named Export/Import

export const component or export {component}
import {component} from "path"



# react hooks
(Normal js utility functions)
- useState() - superpower react variale 
whenever super power of react variable chage or update, re-render the component

- useEffect() - 



# Shimmer UI

Loading times are unavoidable in application development. From a user experience (UX) perspective, the most important thing is to show your users that loading is taking place. One popular approach to communicate to users that data is loading is to display a chrome color with a shimmer animation over the shapes that approximate the type of content that is loading.


Routing: createBrowserRouter, RouterProvider, Outlet, Link, useRoueError, client side vs server side routing, dynamic routing 

# Types of testing(developer)

- unit testing
- Integration testing
- End To End Testing - e2e testing
# setting up testing in our app
- intall Reat Testing Library
- install jest testing tool
- configure babel dependencies
- configure parcel congig file to disable default Parcel configration
- Jest - npx jest --init
- install jsdom library
  
