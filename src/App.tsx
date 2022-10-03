import { Provider } from "react-redux/es/exports"
import { store } from "./app/store"
import SearchForm from "./components/SearchForm"
import UserInfo from "./components/UserInfo"

const App = () => {
  return (
    <Provider store={store}>
      <SearchForm/>
      <UserInfo/>
    </Provider>
  )
}

export default App