import React, { useEffect,useState } from "react";
import CollegeCrad from "../../components/collegeCard/CollegeCrad";
import "./recommandCollege.css";
import {useParams} from 'react-router-dom';
import axios from 'axios';
const RecommendedCollege = () => {
  const {college} = useParams();
  const [data,setData] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  console.log(college);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async() =>{
    setLoading(true);
    try{
      const {data} = await axios.get(`http://localhost:8080/${college}`)
      setData(data.data);
    }catch(e){
      setError(true);    
    }
    setLoading(false);
  }
  return (
    <div className="project-section">
      <div class="album py-5">
        <div class="container">
          <div class="row">
            {/* {console.log(data)} */}
            {data.map(clg=> <CollegeCrad key={clg.id} clg={clg}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCollege;
