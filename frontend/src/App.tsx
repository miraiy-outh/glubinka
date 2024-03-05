import { ThemeProvider } from "@mui/material"
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { ProductPage } from './pages/product-page/product-page'
import { ProductsList } from './pages/products-list/products-list'
import theme from "./theme/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
      </ThemeProvider>
  )
}

export default App
