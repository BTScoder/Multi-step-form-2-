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

  const setDetails = ({ userName, email, phone }) => {
    setData((prev) => ({
      ...prev,
      personalInfo: {
        name: userName,
        email,
        phone,
      },
    }));
  };
  console.log(data);
  return (
    <>
      {/* Note that we dont use parenthesis in the setDetails here because it calls it immediately  */}
      <Details setDetails={setDetails} />
    </>
  );
};

export default Content;
