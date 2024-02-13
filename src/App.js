// import Card01 from "./Cards/Card01";
import Catogary from "./Components/Catogary";
// import Send from "./Components/POPup/Send";
// import PrivacyP from "./Components/PrivacyP";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from "./Cards/Search";

// import Button from "./POPUP/Button";

// import Card02 from "./Cards/Card02";

// import Send from "./Components/POPup/Send";

// import Terms from "./Components/Terms";



// import {}


function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Catogary/>}></Route>
      <Route path='/Search' element={<Search/>}></Route>
    </Routes>


    </BrowserRouter>











    {/* <Send/> */}

    {/* <Terms/> */}
    {/* <Card02/> */}

    {/* <Button/> */}



    {/* <PrivacyP/> */}

    {/* <Catogary/> */}
    {/* <Send/> */}

    {/* <Search/> */}

    {/* <Card01/> */}
    
    
    </>
    
  );
}

export default App;
