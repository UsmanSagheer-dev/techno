import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";

const CardItem = ({ image, title, description, paragraph }) => {
  return (
    <Card
      sx={{
        width: "100%", // Make the card take full width of its container
        maxWidth: "400px", // Set a maximum width
        height: "auto",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add some shadow for better visuals

       
        "@media (max-width: 815px)": {
          width: "100%", // Full width on smaller screens
          maxWidth: "none", // Remove the maximum width constraint
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 20px 1px 20px",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="120"
            sx={{
              width: "120px",
              borderRadius: "50%",
              
              borderColor: "yellow",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
            image={image}
            alt={title}
          />

          <Box
            sx={{
              padding: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              variant="h1"
              component="div"
              sx={{
                fontSize: "30px",
                fontWeight: "500",
                color: "blue",
                paddingBottom: "0",
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              fontSize={"16px"}
              sx={{ color: "#a7a7a7" }}
            >
              {description}
            </Typography>
            <Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "25px" }}>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            fontSize: "20px",
            fontStyle: "italic",
            margin: "10px auto 15px auto",
          }}
        >
          {paragraph}
        </Typography>
      </Box>
    </Card>
  );
};

export default CardItem;
