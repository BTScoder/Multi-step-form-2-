import { useEffect, useState } from "react";
import PAGES from "../constants";
// import Details from "./Details";
const Content = () => {
  const [currentPage, setcurrentPage] = useState(2);
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

  // This block updates the personalInfo object
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

  const setSelectedPlan = ({ selectedPlanType, selectedPlanPrice }) => {
    console.log(selectedPlanType);
    setData((prev) => ({
      ...prev,
      plan: {
        type: selectedPlanType,
        price: selectedPlanPrice,
      },
    }));
  };
  console.log(data);
  return (
    <>
      {/* Note that we dont use parenthesis in the setDetails here because it calls it immediately  */}
      {/* <Details setDetails={setDetails} /> */}

      {PAGES.map((page) =>
        page.page === currentPage ? (
          <page.component
            key={page.page}
            setDetails={setDetails}
            setSelectedPlan={setSelectedPlan}
            setCurrentPage={setcurrentPage}
          />
        ) : null,
      )}
    </>
  );
};

export default Content;
