import { Provider } from "react-redux/es/exports"
import { store } from "./app/store"
import Main from "./components/Main"
import SearchForm from "./components/SearchForm"

const App = () => {
  return (
    <Provider store={store}>
      <SearchForm/>
      <Main/>
    </Provider>
  )
}

export default App