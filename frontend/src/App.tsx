import { ThemeProvider } from "@mui/material"
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { ProductPage } from './pages/product-page/product-page'
import { ProductsList } from './pages/products-list/products-list'
import theme from "./theme/theme"
import { Provider } from "react-redux"
import { store } from "./services/store"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  )
}

export default App
