import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import MainTheme from './components/MainTheme/MainTheme'
import Navbar from "./components/Navbar/Navbar"

import { ThemeProvider } from "@material-ui/styles";
import { Button } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Navbar/>
      <ItemListContainer greeting="Página en construcción"/>
    </ThemeProvider>
  );
}

export default App;
