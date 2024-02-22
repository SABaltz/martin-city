import {ImageList, ImageListItem, ImageListItemBar, Stack, Typography} from "@mui/material";
import background from "../../photos/hungry-horse-99.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";

function Amenities() {
    return (
        <Stack sx={{margin: '4rem 4rem', ...centerVertHoriz}}>
            <Typography sx={{color: 'black'}}>Amenities</Typography>
            <ImageList sx={{width: '90vw', height: 450}} cols={3} rowHeight={164}>
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
        img: background,
        title: 'Breakfast',
        featured: true,
    },
    {
        img: background,
        title: 'Breakfast',
        featured: true,
    },
    {
        img: background,
        title: 'Breakfast',
        featured: true,
    }]
export default Amenities
