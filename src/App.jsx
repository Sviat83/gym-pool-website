import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

import styles from './App.module.css'



function App() {

    return (
      <div className={styles.app}>
        <RouterProvider router={routes}/>

      </div>
    )
}

export default App;