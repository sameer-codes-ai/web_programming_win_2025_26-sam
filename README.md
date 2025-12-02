# Web Programming

## Course Instructor
**Prof. Anthoniraj Amalanathan**

## Topics
- Internet and its Application
- HTML
- CSS
- JavaScript
- ReactJS

## React Template with HTML using Predefined JS in Script

Below is a basic React template that uses React via CDN scripts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Template</title>
    <!-- React CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        function App() {
            const [count, setCount] = React.useState(0);
            
            return (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Hello, React!</h1>
                    <p>Welcome to Web Programming</p>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
```

### How to Use
1. Copy the HTML code above
2. Save it as an `.html` file (e.g., `react-app.html`)
3. Open the file in a web browser
4. The React application will load and run directly in the browser
