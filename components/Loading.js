import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Circle color="#3CBC28" size={70} />
      </div>
    </center>
  );
}

export default Loading;
