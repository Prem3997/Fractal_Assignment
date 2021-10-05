import React, { useState } from "react";
import "./SideBar.css";

export default function SideBar() {
  const [indexValue, setIndexValue] = useState(0);
  console.log(indexValue, "index");
  const arr = [
    {
      heading: "Ask",
      items: ["Sales Brand1", "Sales Brand2"],
    },
    {
      heading: "TaskBoard",
      items: ["Sales Brand3", "Sales Brand4"],
    },
    {
      heading: "Nudges",
      items: ["Sales Brand5", "Sales Brand6"],
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          width="30px"
          height="30px"
          src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
          alt="logo"
        />
        <h2 className="sidebar__logo__name">Cuddle</h2>
      </div>
      <div className="sidebar__lists">
        {arr.map((item, index) => (
          <div className="column">
            <div
              className="row sidebar__lists__items"
              onClick={() => setIndexValue(index)}
            >
              <img
                width="30px"
                height="30px"
                src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
                alt="logo"
              />
              <h3>{item.heading}</h3>
            </div>
            {item.items.map((i) => (
              <div className={indexValue===index?"column sidebar__item" : "hide"}>
                <h3>{i}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="sidebar__profile">
        <h4>Amit</h4>
        <p className="sidebar__profile__rightarrow"></p>
      </div>
    </div>
  );
}
