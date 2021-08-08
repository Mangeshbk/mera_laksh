// import React from 'react'

// const CollegeCrad = ({clg}) => {
//     return (

//         <>
//             {/* components of card starts from here */}
//             <div class="col-md-4">
//                 <div class="card mb-4 box-shadow">
//                     <img
//                         className="project-image"
//                         src="https://www.thoughtco.com/thmb/WeZTn-IMR0RqlNB4THgDxMFL__c=/2779x1852/filters:fill(auto,1)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
//                         alt=""
//                     />
//                     <div class="card-body">
//                         <h3>{clg.Name}</h3>
//                         <p class="card-text">
//                             Branches Available:{clg.Branches_Available}
//                         </p>
//                         <div class="d-flex justify-content-between align-items-center">
//                             <div class="btn-group">
//                                 <a
//                                     type="button"
//                                     class="btn btn-sm btn-outline-primary official-websiteBtn"
//                                     href={clg.Url}
//                                     target="_blank"
//                                     rel="noreferrer"
//                                 >
//                                     Visit the official website
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* card components ends here */}
//         </>
//     )
// }

// export default CollegeCrad
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 290,
  },
});

export default function MediaCard({ clg }) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={clg.ImageUrl}
          title="College Name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {clg.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {clg.Branches_Available}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography>
            <Link href={clg.Url} onClick={preventDefault}>
              Go to official site
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
