import React from "react";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCardFooter,CCardGroup } from '@coreui/react';
import image from './img/Samosa-Recipe.webp';
import './recipecard.css';
import { Card,CardMedia,CardContent, Typography,CardActions,Button } from '@mui/material';


class RCard extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

<div className="cards">
<div>
<Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
    <div>
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
   <div>
   <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   </div>
   <div>
   <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   </div>
    <div>
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Samosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A samosa (/səˈmoʊsə/) or singara is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></div>
    </div>

      // <article className="card">
      //   <CardHeader category={this.props.details.category} image={this.props.details.image}/>
      //   <CardBody title={this.props.details.title} text={this.props.details.text}/>
      // </article>
      // <CCardGroup>
      //   <CCard>
      //     <CCardImage className="pics" orientation="top" src={image} />
      //     <CCardBody>
      //       <CCardTitle>Card title</CCardTitle>
      //       <CCardText>
      //         This is a wider card with supporting text below as a natural lead-in to additional content.
      //         This content is a little bit longer.
      //       </CCardText>
      //     </CCardBody>
      //     <CCardFooter>
      //       <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      //     </CCardFooter>
      //   </CCard>
      //   <CCard>
      //     <CCardImage className="pics" orientation="top" src={image} />
      //     <CCardBody>
      //       <CCardTitle>Card title</CCardTitle>
      //       <CCardText>
      //         This card has supporting text below as a natural lead-in to additional content.
      //       </CCardText>
      //     </CCardBody>
      //     <CCardFooter>
      //       <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      //     </CCardFooter>
      //   </CCard>
      //   <CCard>
      //     <CCardImage className="pics" orientation="top" src={image} />
      //     <CCardBody>
      //       <CCardTitle>Card title</CCardTitle>
      //       <CCardText>
      //         This is a wider card with supporting text below as a natural lead-in to additional content.
      //         This card has even longer content than the first to show that equal height action.
      //       </CCardText>
      //     </CCardBody>
      //     <CCardFooter>
      //       <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      //     </CCardFooter>
      //   </CCard>
      // </CCardGroup>

    )
  }
}

export default RCard;