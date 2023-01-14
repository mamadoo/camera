import { useState } from "react";
import { Box, styled } from "@mui/material";
import QRScan from "./QRScan";

const Result = styled(Box)({
  marginTop: "100px",
  wordWrap: "break-word",
  width: "300px",
});

function App() {
  const [result, setResult] = useState("");

  return (
    <div>
      <QRScan onScan={(text) => setResult(text)} />
      {result && <Result>Result is: {result}</Result>}
    </div>
  );
}

export default App;
