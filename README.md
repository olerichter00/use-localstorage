# use-localstorage

A react hook to store values and communicate between components using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). It is ready to be used with SSR frameworks like NextJS or Gatsby.

## Install

Install with NPM:

```
npm i --save page-meta-scraper
```

Install with Yarn:

```
yarn add page-meta-scraper
```

## Usage

With an initial value:

```javascript
import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function App() {
  const [count, setCount] = useLocalStorage('key', 1)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count: {count}</div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

With a function as inital value (usefull when accessing the window object using SSR.

```javascript
import React from 'react'
import useLocalStorage from '@olerichter00/use-localstorage'

export default function App() {
  const darkColorScheme = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', darkColorScheme)

  return (
    <div
      className="App"
      style={{
        height: '100vh',
        backgroundColor: darkMode ? 'black' : 'white',
      }}
    >
      <button onClick={() => setDarkMode(true)}>Dark</button>
      <button onClick={() => setDarkMode(false)}>Light</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## License

The npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
