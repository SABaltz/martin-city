import {ImageList, ImageListItem, ImageListItemBar, Stack, Typography} from "@mui/material";
import bikeRack from "../../photos/bike-rack.jpg";
import trashCan from "../../photos/trash-can.jpg";
import firePit from "../../photos/fire-pit.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";

function Amenities() {
    return (
        <Stack sx={{margin: '4rem 4rem', ...centerVertHoriz}}>
            <Typography sx={{color: 'black'}} variant={'h4'}>Amenities</Typography>
            <ImageList sx={{width: '90vw',  height: 500}} cols={3} rowHeight={200}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Stack>)

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
        img: firePit,
        title: 'Fire Pits',
        featured: true,
    }]
export default Amenities
