import {ImageList, ImageListItem, ImageListItemBar, Stack, Typography} from "@mui/material";
import bikeRack from "../../photos/bike-rack.jpg";
import trashCan from "../../photos/trash-can.jpg";
import destination from "../../photos/destination.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";

function Amenities() {
    return (
        <Stack sx={{textAlign: 'center', ...centerVertHoriz, marginTop: '3rem', marginBottom: '3rem'}}>
            <Typography sx={{color: 'black'}} variant={'h4'}>Amenities</Typography>
            <ImageList sx={{width: '90vw'}} cols={3} rowHeight={200}>
                {itemData.map((item) => (
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
