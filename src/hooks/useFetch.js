import { useState } from "react";
import axios from "axios";

/**
 * Custom hook for fetching data from an API.
 *
 * @returns {object} An object containing fetched data, any error message,
 *                   and a function to initiate the data fetch.
 */
const useFetch = () => {
  // State to store fetched data
  const [getData, setGetData] = useState([]);
  // State to store any error message
  const [getError, setError] = useState(null);

  /**
   * Function to fetch all dishes from the API.
   */
  const getAllDishes = async () => {
    try {
      const response = await axios.get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      if (response.status === 200) {
        setGetData(response.data.dishes);
      } else {
        setError("Invalid Request");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid request");
      } else {
        setError(error.message || "An unexpected error occurred"); // Other errors
      }
    }
  };

  return {
    getData,
    getError,
    getAllDishes,
  };
};

export default useFetch;
