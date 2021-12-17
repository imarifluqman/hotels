import Input from "../components/input";
function Property(params) {
  return (
    <>
      <h1>Register Your Property</h1>
      <div>
        <label htmlFor="">Enter your name :</label>
        <Input type="text" placeholder="Enter your Name" />
      </div>
      <div>
        <label htmlFor="">Enter your Email :</label>
        <Input type="email" placeholder="Enter your Email" />
      </div>      <div>
        <label htmlFor="">Enter your City :</label>
        <Input type="text" placeholder="Enter your City" />
      </div>      <div>
        <label htmlFor="">Enter your name :</label>
        <Input type="text" placeholder="Enter your Name" />
      </div>

    </>
  );
}
export default Property;
