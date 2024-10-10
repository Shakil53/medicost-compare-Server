import CreateLinkProvider from "./context/CreateLinkProvider";
import CreateLinkPage from "./pages/createLinkPage/createLinkPage";
import Navbar from "./shared/navbar/Navbar";


const App = () => {
  return (
    <CreateLinkProvider>
      <Navbar></Navbar>
      <CreateLinkPage></CreateLinkPage>      
    </CreateLinkProvider>
  );
};

export default App;