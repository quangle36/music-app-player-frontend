// import AppLayout from 'layouts/ProtectedLayout'
// import RequireAuth from 'layouts/RequireAuth'
import AppLayout from 'layouts/AppLayout'
import Categories from 'pages/Categories'
import Home from 'pages/Home'
// import CardDetail from 'pages/Detail/components/CardDetail'
// import Login from 'pages/Login'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
// import Detail from 'pages/Detail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>

      {/* <Route
        path="/"
        element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }
      > */}
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="detail" element={<Detail />} /> */}
      {/* </Route> */}

      {/* <Route path="/" element={<AppLayout />} /> */}
    </Route>
  )
)
export default router
