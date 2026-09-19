import useTheme from './them.jsx'

function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <main>
      <h1>{theme === 'light' ? 'Light' : 'Dark'} mode</h1>
      <button type="button" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </main>
  )
}
 
 export default App