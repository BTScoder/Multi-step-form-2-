import { useState, useMemo } from "react";

const Details = ({ setDetails, setCurrentPage }) => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [error, setError] = useState("");

  const isComplete = useMemo(() => {
    return userName !== "" && email !== "" && phone !== "";
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isComplete) {
      // setError("Please fill all the fields before proceeding");
      return;
    }
    // setError("");
    console.log("form submitted");
    setDetails({ userName, email, phone });
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <p>Please make sure to fill all fields before being allowed to proceed</p>
      <form onSubmit={handleSubmit}>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button type="submit" disabled={!isComplete} onClick={handleSubmit}>
          Next
        </button>
      </form>
      <p>{userName}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
};

export default Details;
