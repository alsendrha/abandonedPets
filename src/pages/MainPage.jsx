import Pets from "../components/pets/Pets";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          margin: "10px auto",
          justifyContent: "space-evenly",
        }}
      >
        <Pets id={1} />
        <Pets id={2} />
        <Pets id={3} />
      </div>
    </div>
  );
};

export default MainPage;
