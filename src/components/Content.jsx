import { useEffect, useState } from "react";
import Details from "./Details";
const Content = () => {
  const [pages, setPages] = useState(1);
  const [data, setData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      type: "",
      price: 0,
    },
    addOns: [],
    yearlyBilling: false,
  });

  return (
    <>
      <Details />
    </>
  );
};

export default Content;
