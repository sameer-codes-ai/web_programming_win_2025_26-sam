Create README documentation for the Web Programming course with course info and a React template using CDN scripts.

## Changes

- **Course metadata**: Title, instructor (Prof. Anthoniraj Amalanathan)
- **Topics list**: Internet and its Application, HTML, CSS, JavaScript, ReactJS
- **React CDN template**: Complete HTML file with React 18 + Babel via unpkg

## React Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            const [count, setCount] = React.useState(0);
            return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
        }
        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
</body>
</html>
```

No build step required—saves directly as `.html` and runs in browser.

<!-- START COPILOT CODING AGENT SUFFIX -->



<details>

<summary>Original prompt</summary>

> create readme with teh following Web Programming
> Course Instructor: Prof. Anthoniraj Amalanathan
> Topics
> Internet and its Application
> HTML
> CSS
> JavaScript
> ReactJS also provide react template with html using predeifned js in script


</details>



<!-- START COPILOT CODING AGENT TIPS -->
---

💡 You can make Copilot smarter by setting up custom instructions, customizing its development environment and configuring Model Context Protocol (MCP) servers. Learn more [Copilot coding agent tips](https://gh.io/copilot-coding-agent-tips) in the docs.
