import React,{useState,useEffect} from "react";
import SingleJourny from "../../components/singleJourney/SingleJourney";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navigation from "../recommendecCollege/Navigation";
import FootersSec from "../recommendecCollege/FootersSec";

function Journy() {
  const [isLoading,setIsLoading] = useState(false);
  const [data,setData] = useState([]);
  const [error,setError] = useState(false);
  // const params = useParams();
  // const {education_path} = param;
  const {category} = useParams()
  useEffect(()=>{
    fetchData();
    console.log(data);
  },[])
  const fetchData=async()=>{
    setIsLoading(true);
      try{
        const {data} = await axios.get(`http://localhost:8080/journeys/${category}`)
        setData(data.data);
        setIsLoading(false)

      }catch(e){
        console.err(e);
        setError(true)
        setIsLoading(false)

      }
  }
  return (
    <>
    <Navigation />
    <div style={{ margin: "100px auto 50px" }}>
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        START YOUR JOURNY
      </h2>
      {/* {console.log(data)}; */}
      {data?.map((el)=><SingleJourny key={el._id} {...el} />)}
      {/* <SingleJourny/>
      <SingleJourny/> */}
      {/* <SingleJourny/> */}

    </div>
    <FootersSec />
    </>
  );
}

// export default Journy;
// import React from "react";
// import SingleJourny from "../../components/singleJourney/SingleJourney";

// function Journy() {
//   return (
//     <div style={{ margin: "100px auto 50px" }}>
//       <h2 style={{ textAlign: "center", padding: "20px" }}>
//         START YOUR JOURNY
//       </h2>
//       <SingleJourny />
//       <SingleJourny />
//     </div>
//   );
// }

export default Journy;

