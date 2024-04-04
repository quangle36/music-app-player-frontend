import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { persistor, store } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import router from 'routes/routes'
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
