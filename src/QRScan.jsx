import { Box, Button, styled } from "@mui/material";
import { memo, useState } from "react";
import { QrReader } from "react-qr-reader";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const ViewFinder = styled(Box)({
  top: 0,
  left: 0,
  zIndex: 1,
  boxSizing: "border-box",
  border: "50px solid rgba(0, 0, 0, 0.3)",
  boxShadow: "rgba(255, 0, 0, 0.5) 0px 0px 0px 5px inset",
  position: "absolute",
  width: "100%",
  height: "100%",
});

const constraints = { facingMode: "environment" };
const containerStyle = { width: "320px", height: "240px" };
const videoStyle = { objectFit: "cover" };

function QRScan({ onScan }) {
  const [error, setError] = useState(false);

  const onResult = (result, error) => {
    if (!!result) {
      onScan(result?.getText());
    }

    if (!!error) {
      setError(true);
    }
  };

  const handleRetry = () => {
    setError(false);
  };

  return (
    <Container>
      {error ? (
        <div>
          Something went wrong
          <Button onClick={handleRetry}>Try again</Button>
        </div>
      ) : (
        <QrReader
          constraints={constraints}
          ViewFinder={ViewFinder}
          onResult={onResult}
          containerStyle={containerStyle}
          videoStyle={videoStyle}
        />
      )}
    </Container>
  );
}

export default memo(QRScan);
