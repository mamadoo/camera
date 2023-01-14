import { Box, styled } from "@mui/material";
import { memo, useState } from "react";
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
        ViewFinder={() => (
          <div
            style={{
              top: 0,
              left: 0,
              zIndex: 1,
              boxSizing: "border-box",
              border: "50px solid rgba(0, 0, 0, 0.3)",
              boxShadow: "rgba(255, 0, 0, 0.5) 0px 0px 0px 5px inset",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        )}
        onResult={(result, error) => {
          if (!!result) {
            setResult(result?.getText());
          }

          if (!!error) {
            console.error(error);
          }
        }}
        containerStyle={{ width: "320px", height: "240px" }}
        videoStyle={{ objectFit: "cover" }}
      />
      <Result>{result}</Result>
    </Container>
  );
}

export default memo(Camera);
