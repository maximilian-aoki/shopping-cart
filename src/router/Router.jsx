import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootPage from '../components/page-components/root/RootPage';
import ErrorPage from '../components/page-components/error/ErrorPage';
import ProductsPage from '../components/page-components/products/ProductsPage';
import ProductItemPage from '../components/page-components/product-item/ProductItemPage';
import CartPage from '../components/page-components/cart/CartPage';
import OrderConfirmedPage from '../components/page-components/order-confirmed/OrderConfirmedPage';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: 'products', element: <ProductsPage /> },
        {
          path: 'products/:id',
          element: <ProductItemPage />,
          errorElement: <ErrorPage />,
        },
        { path: 'cart', element: <CartPage /> },
        { path: 'order-confirmed', element: <OrderConfirmedPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
