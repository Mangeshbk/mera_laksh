import React from "react";
import { useHistory } from "react-router";
import Styles from "./EducationPath.module.css";

const categories = [
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineer",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Medical-Final.png",
    alt: "Doctor",
    name: "Doctor",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Arts-final.png",
    alt: "Engineering",
    name: "Social Scientist",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2021/01/group-1.png",
    alt: "Engineering",
    name: "CA",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2021/01/travel-1.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2021/01/languages-1.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Commerce-Final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Vocational-Courses.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Vocational-Courses.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Computer-applications-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Science-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Mass-communication-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Education-Final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Hotel-managemnt.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Architecture-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Design.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Aviation.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Animation-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Management-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Agriculture-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Veterinary-Science.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Paramedical-final.png",
    alt: "Engineering",
    name: "Engineering",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Dental-final.png",
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
          onClick={() => history.push(`/education_path/${item.alt}`)}
        >
          <img src={item.img} alt={item.alt} />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default EducationPath;
