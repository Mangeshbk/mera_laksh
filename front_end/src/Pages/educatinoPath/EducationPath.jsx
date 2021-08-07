import React from "react";
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
    name: "Engineering",
  },
];

function EducationPath() {
  return (
    <div className={Styles.categories}>
      {categories.map((item, ind) => (
        <div className={Styles.category}>
          <img src={item.img} alt={item.alt} />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default EducationPath;
