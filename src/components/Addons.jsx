import { useState } from "react";
import { ADDONS } from "../constants";

const Addons = ({ yearly, setAddons }) => {
  const [differentAddons, setDifferentAddons] = useState(ADDONS);

  const handleAddonChange = (id) => {
    const updatedAddons = differentAddons.map((addon) => {
      if (addon.id === id) {
        return { ...addon, isChecked: !addon.isChecked };
      }
      return addon;
    });
    setDifferentAddons(updatedAddons);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddons(differentAddons.filter((addon) => addon.isChecked));
  };
  return (
    <>
      <p>Add ons Page</p>
      <p>Addons help enhance gaming experience</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        {differentAddons.map((addon) => (
          <div key={addon.id}>
            <input
              type="checkbox"
              id={addon.addon.replace(/\s+/g, "-")} // ID's should not have spaces so we used regex to remove them and replace it with dashes
              value={addon.addon} // forget about this for now
              checked={addon.isChecked}
              onChange={() => handleAddonChange(addon.id)}
            />
            <div>
              <label
                htmlFor={addon.addon.replace(/\s+/g, "-")}
                className="capitalize"
              >
                {addon.addon}
              </label>
              <p>
                {yearly
                  ? `${addon.yearlyPrice}/mo`
                  : `${addon.monthlyPrice}/mo`}
              </p>
            </div>
            <br />
          </div>
        ))}
        <button type="button">Go Back</button>
        <button
          type="submit"
          disabled={
            differentAddons.filter((addon) => addon.isChecked).length === 0
          }
        >
          Next
        </button>
      </form>

      {/* Display filtered results */}
      <div>
        <h2>Selected Addons: </h2>
        <ul>
          {
            // Step 8: Display a list of only the checked lights.
            differentAddons
              .filter((addon) => addon.isChecked) // Filter out unchecked bulbs
              .map((addon) => (
                <li key={addon.id}>{addon.addon}</li> // Map the remaining ones to list items
              ))
          }
        </ul>
      </div>
    </>
  );
};

export default Addons;
