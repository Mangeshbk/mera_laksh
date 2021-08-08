import React, { useEffect, useState } from "react";
import CollegeCrad from "../../components/collegeCard/CollegeCrad";
import "./recommandCollege.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./recommandCollege.css";
import { TextField } from "@material-ui/core";
import LoadingOverlay from "react-loading-overlay";
import { Button } from "@material-ui/core";
import Navigation from "./Navigation";
import {useHistory} from 'react-router-dom';

const RecommendedCollege = () => {
  const { college } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([]);
  const [search,setSearch] = useState("");
  const history = useHistory();

  console.log(college,'in recommmedned clg page');
  console.log(window.location.search);
  var param = new URLSearchParams(window.location.search);

  useEffect(() => {
    fetchData();
    const inputs = document.getElementsByClassName("inp");
    for(let i=0;i<inputs.length;i++){
          if(param.get(`filter_${inputs[i].name}`)!=null){
              inputs[i].checked=true
        }
    }
  }, [window.location.search]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:8080/${college}${window.location.search}`);
      setData(data.data);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getState();
  }, []);
  const changecbx =(e)=>{
      const {name,value} = e.target;

      if(e.target.checked){
              param.append(`filter_${name}`, e.target.checked);
      }else{
              param.delete(`filter_${name}`)
      }
      // console.log(param.get(`${name}`));
      history.push({search: param.toString()});
  }
  const state_filter =(e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    if(param.get(`filter_${name}`)!=null){
      param.delete(`filter_${name}`)
    }
    if(value==="All"){
      param.delete(`filter_${name}`)
      history.push({search: param.toString()});
      return
    }
    param.append(`filter_${name}`,value);
    history.push({search: param.toString()});

  }
  const handlesort = (e) =>{
    const {name,value} = e.target;
    if(param.get(`${name}`)!=null){
      param.delete(`${name}`)
    }
    if(value==0){
      param.delete(`${name}`);
      history.push({search: param.toString()});
    }else{
      param.append(`${name}`,value);
      history.push({search: param.toString()});
    } 
   
  }
    // if(e.target.checked){
    //         param.append(`filter_${name}`, e.target.checked);
    // }else{
    //         param.delete(`filter_${name}`)
    // }
    // console.log(param.get(`${name}`));
    // history.push({search: param.toString()});
  const handlesearch = () =>{
    if(param.get(`filter_Name`)!=null){
      param.delete(`filter_Name`)
    }
    if(search==""){
      param.delete(`filter_Name`);
      history.push({search: param.toString()});
    }else{
       param.append(`filter_Name`,search);
       history.push({search: param.toString()});
    }
    
  }
  const getState = () => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
      .then((res) => {
        console.log(res);
        setState([{state_name:"All"},...res.data.states]);
      })
      .catch((e) => alert(e));
  };
  return (
    <LoadingOverlay
    style={{width:"100%",postion:'fixed',top:'0'}}
   active={loading}
   spinner={true}
   text={
     <p style={{ fontSize: "13px" }}>
       Please wait, getting
       <br />
       best options forr your <br />
       career
     </p>
   }
   fadeSpeed={500}
 >
    <div style={{minHeight:'750px'}}>
      
      <div className="filter-container">
     
        <div className="filter-box">
          <div>
            <label className="lable"> Select State: </label>
            <select
              className="drop-down-menu"
              id="state_select"
              name="State"
              onChange={(e)=>state_filter(e)}
            >
              {state.map((item) => (
                <option value={item.state_name=="Uttar Pradesh"?'UP':item.state_name}>{item.state_name=="Uttar Pradesh"?'UP':item.state_name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="lable">Sort by Fees: </label>
            <select className="drop-down-menu" name="Fees" onChange={(e)=>handlesort(e)}>
              <option value={0} >{`--------------`}</option>
              <option value={1}>Ascending</option>
              <option value={-1}>Descending</option>
            </select>
          </div>
          <div>
            <label className="lable">Sort by Ratings: </label>
            <select className="drop-down-menu" name="Ratings" onChange={(e)=>handlesort(e)}>
              <option value={0} >{`--------------`}</option>
              <option value={1}>Ascending</option>
              <option value={-1}>Descending</option>
            </select>
          </div>
          <div>
            <label className="lable"> Sort by Cut-off: </label>
            <select className="drop-down-menu" name="CutOff" onChange={(e)=>handlesort(e)}>
              <option value={0} >{`--------------`}</option>
              <option value={-1}>Descending</option>
              <option value={1}>Ascending</option>
            </select>
          </div>

          <div className="inputField">
            <label className="lable "> Hostel:&nbsp;</label>
            <input
              className="checkBox-style inp"
              onChange={changecbx}
              type="checkbox"
              name="Hostel"
              value="Hostel"
            />
          </div>
        </div>
        <div className="search-feild">
          <TextField
            style={{ width: "400px" }}
            id="outlined-basic"
            label="Enter college name"
            variant="outlined"
            onChange={(e)=>{setSearch(e.target.value)}}
          />
          <Button
            style={{ padding: "15px", backroungColor: "#17B57D" }}
            variant="contained"
            color="#17B57D"
            onClick={handlesearch}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="colleges">
        {data.length!==0?data.map((clg) => (
          <CollegeCrad key={clg.id} clg={clg}/>
        )):'No Results Found'}
        {/* {data.map((clg) => (
          <CollegeCrad key={clg.id} clg={clg}/>
        ))} */}
      
      </div>
    </div>
    </LoadingOverlay>
  );
};

export default RecommendedCollege;
// const home = () => {
  // const history = useHistory();
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
