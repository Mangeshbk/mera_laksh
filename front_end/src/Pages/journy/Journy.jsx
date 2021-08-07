import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Journy() {
  const { category } = useParams();

  const [ctgry, setCtgry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchCtgry();
  }, []);

  const fetchCtgry = async () => {
    try {
      const res = await axios.get(`http://localhost:3050/data/${category}`);

      console.log(res);
      setCtgry(res.data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(ctgry);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : isError ? (
    <div>
      <h1>Error...</h1>
    </div>
  ) : (
    <div>
      <h1>Path to become {category}</h1>
      my journy
    </div>
  );
}

export default Journy;
