import SelectPlan from "./components/SelectPlan";
import Details from "./components/Details";
import AddOns from "./components/Addons";
import Summary from "./components/Summary";
const PAGES = [
  {
    page: 1,
    component: Details,
  },
  {
    page: 2,
    component: SelectPlan,
  },
  {
    page: 3,
    component: AddOns,
  },
  {
    page: 4,
    component: Summary,
  },
];

export const PLANS = [
  {
    plan: "arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    // icon: ArcadeIcon,
  },
  {
    plan: "advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    // icon: AdvancedIcon,
  },
  {
    plan: "pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    // icon: ProIcon,
  },
];

export const ADDONS = [
  {
    id: 1,
    addon: "online service",
    isChecked: false,
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    addon: "larger storage",
    isChecked: false,
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    addon: "customizable profile",
    isChecked: false,
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export default PAGES;
