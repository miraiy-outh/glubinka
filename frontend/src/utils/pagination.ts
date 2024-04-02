import { TProduct } from "../services/reducers/products-reducer";

const itemsPerPage = 3;

export function paginationProducts(page: number, products: TProduct[]) {
  if (products.length <= itemsPerPage) return products;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const newProducts = products.slice(startIndex, endIndex);
  return newProducts;
}

export function pagesCount(length: number) {
  if (length <= itemsPerPage) return 1;
  return Math.ceil(length / itemsPerPage);
}
