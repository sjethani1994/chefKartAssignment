import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import DateTime from "./components/DateTime";
import DishItems from "./components/DishItems";
import PopularDishes from "./components/PopularDishes";
import useFetch from "./hooks/useFetch";
function App() {
  const { getData, getAllDishes } = useFetch(); // Call the useFetch hook

  const [apiData, setData] = useState([]);

  useEffect(() => {
    getAllDishes(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures it runs only once on component mount

  useEffect(() => {
    if (getData) {
      setData(getData);
    } else {
      setData(null);
    }
  }, [getData]);
  return (
    <div className="App">
      <div class="container">
        <div class="row mt-3">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <DateTime></DateTime>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Category></Category>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <PopularDishes></PopularDishes>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {apiData &&
              apiData.map((dishes) => (
                <div
                  key={dishes.id}
                  className="col-xs-12 col-sm-12 col-md-6 col-lg-10 col-xl-10 mt-3"
                >
                  <DishItems dishes={dishes} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
