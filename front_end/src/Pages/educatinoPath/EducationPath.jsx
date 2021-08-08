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
    alt: "Arts",
    name: "Arts",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2021/01/group-1.png",
    alt: "Humanities",
    name: "Humanities",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2021/01/travel-1.png",
    alt: "Travel",
    name: "Travel",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2021/01/languages-1.png",
    alt: "Languages",
    name: "Languages",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Commerce-Final.png",
    alt: "Commerce",
    name: "Commerce",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Vocational-Courses.png",
    alt: "Vocational courses",
    name: "Vocational courses",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Computer-applications-final.png",
    alt: "Computer applictions",
    name: "Computer applictions",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Science-final.png",
    alt: "Science",
    name: "Science",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Mass-communication-final.png",
    alt: "Mass communication",
    name: "Mass communication",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Education-Final.png",
    alt: "Education",
    name: "Education",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Hotel-managemnt.png",
    alt: "Hotel management",
    name: "Hotel management",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Architecture-final.png",
    alt: "Architecture",
    name: "Architecture",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Design.png",
    alt: "Design",
    name: "Design",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Engineer-source.png",
    alt: "Engineer",
    name: "Engineer",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Aviation.png",
    alt: "Aviation",
    name: "Aviation",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Vocational-Courses.png",
    alt: "Vocational courses",
    name: "Vocational courses",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Animation-final.png",
    alt: "Animation",
    name: "Animation",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Management-final.png",
    alt: "Management",
    name: "Management",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Agriculture-final.png",
    alt: "Agriculture",
    name: "Agriculture",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Veterinary-Science.png",
    alt: "Veterinary Science",
    name: "Veterinary Science",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Paramedical-final.png",
    alt: "Paramedical",
    name: "Paramedical",
  },
  {
    img: "https://static.collegefinderindia.com/uploads/2020/10/Dental-final.png",
    alt: "Dental",
    name: "Dental",
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
