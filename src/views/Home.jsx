import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import { fetchData } from "../hooks/getData";
import "./home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        console.log("API Response:", result.data);

        const photos = result.data.photos || [];
        console.log("Extracted Photos:", photos);

        setData(photos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <>
      <div className="app-container">
        <h1 className="title">Natural</h1>
        {isLoading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          <Gallery data={data} />
        )}
      </div>
    </>
  );
};

export default Home;
