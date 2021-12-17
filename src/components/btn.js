import Button from "@mui/material/Button";
function Btn(props) {
  return (
    <Button className={`btn ${props.className}`} {...props} variant="contained">
    </Button>
  );
}
export default Btn;
