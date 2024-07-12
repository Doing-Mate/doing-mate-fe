import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
interface StarRatingProps {
  value?: number;
}

export const StarRating = ({ value = 1 }: StarRatingProps) => {
  return (
    <Stack spacing={1}>
      <Rating name="star-rating" defaultValue={value} max={5} size={"large"} />
    </Stack>
  );
};
