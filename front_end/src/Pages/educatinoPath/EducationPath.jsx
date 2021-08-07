import React from "react";
import { useHistory } from "react-router";
import Styles from "./EducationPath.module.css";

const categories = [
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "abc",
  },
];

function EducationPath() {
  const history = useHistory();
  return (
    <div className={Styles.categories}>
      {categories.map((item, ind) => (
        <div
          key={ind}
          className={Styles.category}
          onClick={() => history.push(`/education_path:${item.name}`)}
        >
          <img src={item.img} alt={item.alt} />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default EducationPath;
