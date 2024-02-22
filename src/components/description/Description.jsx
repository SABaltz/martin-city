import {centerVertHoriz} from "../../global-parameters/Styles";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Description(){
    return(<Box sx={{
        width: '100vw',
        height: '30vh',
        ...centerVertHoriz
    }}>
        <Typography sx={{margin: '4rem 4rem'}}>Oceanside RV Park is located in Haines, Alaska right on the shores of the Lynn Canal, North
            America’s longest fjord. Breathtaking ocean and mountain views surround the park, which is
            conveniently
            located adjacent to Main Street, the Haines Harbor, and the downtown business district.
            As a waterfront campground in Alaska, our guests are constantly spoiled with the incredible views of
            Alaska’s mountainous terrain and glacial waters. Haines, Alaska is widely known as the adventure
            capital of
            Alaska, and Oceanside RV Park provides the perfect location for taking advantage of all our region
            has to
            offer.

            Our RV Sites have individual full hook ups (30 & 50 amp electrical, water, sewer), grass pads,
            picnic
            tables, and many amenities to make your stay comfortable.</Typography>
    </Box>)
}

export default Description
