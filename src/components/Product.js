import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            sx={{marginTop: "1rem"}}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(50, "€")}
          </Typography>
        }
        title="Nike"
        subheader="In stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/6540980/pexels-photo-6540980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Running Shoes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Running Shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart fontSize="large" />
        </IconButton>
        {
          Array(4)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))
        }
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Beatiful Nike Running Shoes 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
