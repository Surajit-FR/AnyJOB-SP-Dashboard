import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Topbar from "./components/common/Topbar";
// import PreLoader from "./components/PreLoader";
import AllRoutes from "./routes/AllRoutes";

const App = (): JSX.Element => {
  return (
    <>
      {/* <PreLoader /> */}

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