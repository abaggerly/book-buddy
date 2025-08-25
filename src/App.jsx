import { createBrowserRouter } from 'react-router';
import Layout from './layouts/Layout';
import bookLoader from './API/loader/bookLoader';
import booksLoader from './API/loader/booksLoader';
import userLoader from './API/loader/userLoader';
import AccountPage from './Pages/AccountPage';
import LoginPage from './Pages/auth/LoginPage';
import RegisterPage from './Pages/auth/RegisterPage';
import BookPage from './Pages/books/BookPage';
import BooksPage from './Pages/books/BooksPage';
import PageNotFound from './Pages/PageNotFound404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: BooksPage, loader: booksLoader },
      { path: 'books', Component: BooksPage, loader: booksLoader },
      {
        path: 'books/:id',
        Component: BookPage,
        loader: bookLoader,
      },
      { path: 'account', Component: AccountPage, loader: userLoader },
      { path: 'register', Component: RegisterPage },
      { path: 'login', Component: LoginPage },
      { path: '*', Component: PageNotFound },
    ],
  },
];
const App = createBrowserRouter(routes);

export default App;