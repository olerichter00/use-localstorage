# use-localstorage

A react hook that uses the [local storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store values and communicate between components. The hook is designed to be used with SSR frameworks like NextJS or Gatsby.


![CI status](https://github.com/olerichter00/use-localstorage/workflows/CI/badge.svg)
[![DeepSource](https://deepsource.io/gh/olerichter00/use-localstorage.svg/?label=active+issues)](https://deepsource.io/gh/olerichter00/use-localstorage/?ref=repository-badge)
[![DeepScan grade](https://deepscan.io/api/teams/11955/projects/15037/branches/294269/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11955&pid=15037&bid=294269)
[![npm version](https://badge.fury.io/js/%40olerichter00%2Fuse-localstorage.svg)](https://badge.fury.io/js/%40olerichter00%2Fuse-localstorage)


[![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elated-fast-fuk2u?fontsize=14&hidenavigation=1&theme=dark)

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

**Usage with an inital value**

```typescript
import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function App() {
  const [count, setCount] = useLocalStorage<number>('counter', 1)

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

**Usage with a function as inital value**

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


## License

The npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
