import {ImageList, ImageListItem, ImageListItemBar, Stack, Typography} from "@mui/material";
import bikeRack from "../../photos/bike-rack.jpg";
import trashCan from "../../photos/trash-can.jpg";
import destination from "../../photos/destination.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";
import Box from "@mui/material/Box";

function Amenities() {
    return (
        <Stack sx={{textAlign: 'center', ...centerVertHoriz, marginTop: '3rem', marginBottom: '3rem'}}>
            <Typography sx={{color: 'black'}} variant={'h3'}>Amenities</Typography>
            <ImageList sx={{width: '90vw'}} cols={3} rowHeight={200}>
                {itemData.map((item) => (
                    <Box
                        onClick={() => item.title === 'Convenient Location' ? window.open("https://www.google.com/maps/place/9234+Hwy+2+E,+Columbia+Falls,+MT+59912/@48.3910565,-114.0436689,17z/data=!3m1!4b1!4m6!3m5!1s0x53663ee5fcea226b:0xa23a1e7f79093ae7!8m2!3d48.391053!4d-114.041094!16s%2Fg%2F11c2h319n3?entry=ttu") : ''}
                        sx={{cursor: item.title === 'Convenient Location' ? 'pointer': ''}}>
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{width: '29.8vw', height: 200}} // Set fixed width and height
                            />
                            <ImageListItemBar
                                title={item.title}
                            />
                        </ImageListItem>
                    </Box>
                ))}
            </ImageList>
        </Stack>
    );
}


const itemData = [
    {
        img: bikeRack,
        title: 'Locking Bike Racks',
        featured: true,
    },
    {
        img: trashCan,
        title: 'Trash Service',
        featured: true,
    },
    {
        img: destination,
        title: 'Convenient Location',
        featured: true,
    }]
export default Amenities


// <Grid item xs={12} sm={4} md={2}><Typography onClick={() => window.open("https://www.google.com/maps/place/9234+Hwy+2+E,+Columbia+Falls,+MT+59912/@48.3910565,-114.0436689,17z/data=!3m1!4b1!4m6!3m5!1s0x53663ee5fcea226b:0xa23a1e7f79093ae7!8m2!3d48.391053!4d-114.041094!16s%2Fg%2F11c2h319n3?entry=ttu")} sx={{...centerVertHoriz}}><DirectionsIcon
// sx={{paddingRight: '.5rem'}}/>Directions</Typography></Grid>
