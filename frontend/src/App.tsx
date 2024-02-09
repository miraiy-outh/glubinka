import { Route, Routes } from 'react-router-dom'
import { mockProductsInfo } from './mocks/mocks-data'
import { MainPage } from './pages/main-page/main-page'
import { ProductPage } from './pages/product-page/product-page'
import { ProductsList } from './pages/products-list/products-list'

function App() {

  return (
    <>
      {/* <MainPage/> */}
      {/* <ProductsList /> */}
      {/* <ProductPage
        productInfo={mockProductsInfo[0]}
      /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
