import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 140
  }
};

function Review(props) {
  const { classes, review } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={review.user.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {review.user.name}
          </Typography>
          <Typography component="p">{review.text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={review.url} size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
