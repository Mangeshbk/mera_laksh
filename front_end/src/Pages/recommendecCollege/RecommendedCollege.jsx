import React, { useEffect, useState } from "react";
import CollegeCrad from "../../components/collegeCard/CollegeCrad";
import "./recommandCollege.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./recommandCollege.css";

const RecommendedCollege = () => {
  const { college } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([]);
  const [stName, setStName] = useState("odisha");
  console.log(college);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:8080/${college}`);
      setData(data.data);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getState();
  }, []);

  const getState = () => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
      .then((res) => {
        console.log(res);
        setState(res.data.states);
      })
      //   .then((res) => getData())
      .catch((e) => alert(e));
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <select onChange={(e) => setStName(e.target.value)}>
          {state.map((item) => (
            <option value={item.state_name}>{item.state_name}</option>
          ))}
        </select>

        <div>
          <label> Search by Fees</label>
          <select name="Fees">
            <option value={1}>Ascending</option>
            <option value={-1}>descending</option>
          </select>
        </div>

        <div>
          <label> Search by CutOff</label>
          <select name="CutOff">
            <option value={-1}>descending</option>
            <option value={1}>Ascending</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" name="p1" value="Hostel" />
            Hostel
          </label>
        </div>

        <input type="text" placeholder="enter college name" />
        <button>Search</button>
      </div>
      <div className="colleges">
        {data.map((clg) => (
          <CollegeCrad key={clg.id} clg={clg}/>
        ))}
      </div>
    </>
  );
};

export default RecommendedCollege;
// const home = () => {
//   const history = useHistory();
//   console.log(window.location.search);
//   var param = new URLSearchParams(window.location.search);

//   useEffect(()=>{
//       const inputs = document.getElementsByClassName("inp");
//       for(let i=0;i<inputs.length;i++){
//           if(param.get(`${inputs[i].name}`)!=null){
//               inputs[i].checked=true
//           }
//       }
//   },[])

//   const change =(e)=>{
//       const {name,value} = e.target;

//       if(e.target.checked){
//               param.append(`${name}`, value);
//       }else{
//               param.delete(`${name}`)
//       }
//       // console.log(param.get(`${name}`));
//       history.push({search: param.toString()});
//   }
//   return (
//       <div>
//         This is home page
//         <button>change url</button>
//         <input type="checkbox" className="inp" name="p1" value="male" onChange={change} />
//         <input type="checkbox" className="inp" name="p2" value="female" onChange={change} />
//         <input type="checkbox" className="inp" name="p3" value="others" onChange={change} />
//       </div>
//   );                                                                                                                          
// };

// export default home;
