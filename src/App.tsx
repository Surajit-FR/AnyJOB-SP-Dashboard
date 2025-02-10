import { useSelector } from "react-redux";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Topbar from "./components/common/Topbar";
// import PreLoader from "./components/PreLoader";
import AllRoutes from "./routes/AllRoutes";
import { RootState } from "./store/Store";
import { isjobsloading } from "./utils/loading";
import PreLoader from "./components/PreLoader";

const App = (): JSX.Element => {
  const job =  useSelector((state: RootState)=>state.jobSlice)
  const isLoadingIn = isjobsloading(job)
  return (
    <>
      <PreLoader loading={isLoadingIn}/>

      <div id="wrapper">
        <Navbar />

        <div className="content-page">
          <div className="content">

            <Topbar />
            <div className="page-content-wrapper ">
              <div className="container-fluid">
                <AllRoutes />
              </div>
            </div>
          </div>

          <Footer />
        </div>

      </div>
    </>
  );
};

export default App;