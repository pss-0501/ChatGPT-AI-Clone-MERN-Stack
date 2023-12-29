
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {createTheme} from "@mui/material/styles"
import {themeSettings} from './theme';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>    
          <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<LoginPage/>} />
            </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
