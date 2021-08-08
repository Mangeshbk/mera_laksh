import React, { useEffect, useState } from "react";
import CollegeCrad from "../../components/collegeCard/CollegeCrad";
import "./recommandCollege.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./recommandCollege.css";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
      .catch((e) => alert(e));
  };
  return (
    <>
      <div className="filter-container">
        <div className="filter-box">
          <div>
            <label className="lable"> Select State: </label>
            <select
              className="drop-down-menu"
              onChange={(e) => setStName(e.target.value)}
            >
              {state.map((item) => (
                <option value={item.state_name}>{item.state_name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="lable"> Search by Fees: </label>
            <select className="drop-down-menu" name="Fees">
              <option value={1}>Ascending</option>
              <option value={-1}>descending</option>
            </select>
          </div>

          <div>
            <label className="lable"> Search by CutOff: </label>
            <select className="drop-down-menu" name="CutOff">
              <option value={-1}>descending</option>
              <option value={1}>Ascending</option>
            </select>
          </div>

          <div className="inputField">
            <label className="lable"> Hostel:&nbsp;</label>
            <input
              className="checkBox-style"
              type="checkbox"
              name="p1"
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
          />
          <Button
            style={{ padding: "15px", backroungColor: "#17B57D" }}
            variant="contained"
            color="purple"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="colleges">
        {data.map((clg) => (
          <CollegeCrad key={clg.id} clg={clg} />
        ))}
      </div>
    </>
  );
};

export default RecommendedCollege;
