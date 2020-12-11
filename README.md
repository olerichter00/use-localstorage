# use-localstorage

A react hook to store values and communicate between components using the [local storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), ready to be used with SSR frameworks like NextJS or Gatsby.

[![DeepSource](https://deepsource.io/gh/olerichter00/use-localstorage.svg/?label=active+issues)](https://deepsource.io/gh/olerichter00/use-localstorage/?ref=repository-badge)

## Install

Install with NPM:

```
npm i --save @olerichter00/use-localstorage
```

Install with Yarn:

```
yarn add @olerichter00/use-localstorage
```

## Usage

**use-localstorage** can either be initialized with a value or with a function that returns the initial value. This is especially helpful with SSR if the inital value is only available in the browser environment (like `document` or `window`).

**Using an inital value**

```typescript
import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function App() {
  const [count, setCount] = useLocalStorage<number>('key', 1)

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

**Using with a function as inital value**

```typescript
import React from 'react'
import useLocalStorage from '@olerichter00/use-localstorage'

export default function App() {
  const darkColorScheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const [darkMode, setDarkMode] = useLocalStorage<boolean>('dark-mode', darkColorScheme)

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>Switch Color</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

[![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elated-fast-fuk2u?fontsize=14&hidenavigation=1&theme=dark)

## License

The npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
