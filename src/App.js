import { Container } from "@mui/material";
import { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";
import "./App.css";
import Test from "./Test copy";

const ScrollableBox = ({ runScroll }) => {
  const containerRef = useRef(null);
  const { events } = useScrollOnDrag(containerRef, {
    runScroll: runScroll && runScroll(containerRef),
  });

  return (
    <Container sx={{ width: "100%" }} {...events} ref={containerRef}>
      <Test />
    </Container>
  );
};

function App() {
  const ref = useRef();
  const { events } = useScrollOnDrag(ref);

  return <ScrollableBox />;
}

export default App;
