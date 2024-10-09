import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Discover your dream home or investment property with ease at Estate, where we bring you the finest properties and expert real estate services. Whether you are looking to buy, sell, or rent, we are here to guide you through every step of the process with unparalleled expertise and local market knowledge.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>2+</h1>
              <h2>Months of Experience</h2>
            </div>
            <div className="box">
              <h1>0</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>3+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
