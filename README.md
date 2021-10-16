### Reading in data

The program has a JSON file to read.

### Example item of data
```
{
  "title": "Work",
   "timeframes": {
     "daily": {
       "current": 5,
       "previous": 7
     },
     "weekly": {
       "current": 32,
       "previous": 36
     },
     "monthly": {
       "current": 103,
       "previous": 128
     }
   }
},
 ...
```

JSON data can be read into a React application with a simple import statement.

```
import TimeTracks from './data/timeTracks.json'
```

```jsx
import Report from './data/report.json'

function AnyFunction() {
  return (
    <>
      {Report.timeTracks.map(timeTrack => (
        <h2>{timeTrack.title}</h2>
      ))}
    </>
  );
}

export default App;
```

### Dynamically reading local images

I wanted to be able to add the name of the profile image to load in. The way ReactJS wants you to load in images is with import.
You can use require to do this but there is a bug that means that you must add default:

```js
require('./to/img/a.png')?.default
```

[There is no intention of fixing the bug.](https://github.com/facebook/create-react-app/pull/9934#issuecomment-851286168) 
As they want to move to ES imports.

I'm going to hardcode the import which is fine for this toy application. I haven't investigated what's involved with using S3, say.


### Reference

[Create React app - adding images fonts and files](https://create-react-app.dev/docs/adding-images-fonts-and-files/)

## Custom Font

Adding Custom font to Tailwindcss - I know of two ways that they have discussed are link into index.html head or using @font-face.

### ReactJS 

Adding a custom font to ReactJS seem to mainly discuss @import but there is a mention of link into the header.

Given that "link" is common between Tailwindcss and ReactJS I've used this and it worked.

### Displaying data in framework

Next step was getting a structure with the tabs on one side and the data on the other.
Flexbox solved the view display with the tab headings in one box and the tab data in the other.
I passed the props into the tab function everything was straight forward except
ReactJS didn't accept the for loop and I went with map instead.

