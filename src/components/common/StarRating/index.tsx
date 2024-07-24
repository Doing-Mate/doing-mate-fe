import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
interface StarRatingProps {
  value?: number;
  onChange: (value: number) => void;
}

export const StarRating = ({ value = 1, onChange }: StarRatingProps) => {
  useEffect(() => {
    onChange(value);
  }, []);

  return (
    <Stack spacing={1}>
      <Rating
        name="star-rating"
        defaultValue={value}
        max={5}
        size={"large"}
        onChange={(event, value) => onChange(value!)}
      />
    </Stack>
  );
};
