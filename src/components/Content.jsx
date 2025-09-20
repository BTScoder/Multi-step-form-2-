import { useEffect, useState } from "react";
import PAGES from "../constants";
// import Details from "./Details";
const Content = () => {
  const [currentPage, setcurrentPage] = useState(1);
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

  const setSelectedPlan = ({ selectedPlanType, selectedPlanPrice, yearly }) => {
    // console.log(selectedPlanType);
    setData((prev) => ({
      ...prev,
      plan: {
        type: selectedPlanType,
        price: selectedPlanPrice,
      },
      yearlyBilling: yearly,
    }));
  };

  const setAddons = (selectedAddons) => {
    setData((prev) => ({
      ...prev,
      addOns: selectedAddons,
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
            setAddons={setAddons}
            yearly={data.yearlyBilling}
          />
        ) : null,
      )}
    </>
  );
};

export default Content;
