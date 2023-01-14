import { Box, styled } from "@mui/material";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const Result = styled(Box)({
  marginTop: "100px",
  wordWrap: "break-word",
  width: "300px",
});

function Camera() {
  const [result, setResult] = useState("No result");

  return (
    <Container>
      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, error) => {
          if (!!result) {
            setResult(result?.getText());
          }

          if (!!error) {
            console.error(error);
          }
        }}
        containerStyle={{ width: "100%" }}
      />
      <Result>{result}</Result>
    </Container>
  );
};

export default Camera;
