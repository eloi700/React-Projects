# ComponentsDidMount( )
Syntax:
```jsx
componentsDidMount(){
    console.log("components did mount")
}

render(){
    console.log("render")
    return(
        <div>Hello</div>
    )
}
// render
// components did mount
```
**NOTE** Once it renders / running the component, render will be read first then right after will be the componentdidmount()-only the very first time.

```jsx
componentDidMount(){
    console.log("components did mount")
    fetch("https://swapi.dev/api/people/1")
       .then(res => res.json())
       .then(data => console.log(data));
}
// render
// components did mount
// object of star wars from the url { ... }
```
