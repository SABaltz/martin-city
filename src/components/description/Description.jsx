import {centerVertHoriz} from "../../global-parameters/Styles";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {secondaryColor} from "../../global-parameters/Parameters";

function Description() {
    return (<Box sx={{
        width: '100vw',
        ...centerVertHoriz,
        backgroundColor: secondaryColor
    }}>
        <Typography sx={{margin: '4rem 4rem', fontSize: '1.5rem'}}>Martin City Park is a convenient, budget friendly
            camper-van and tent site campground
            for travelers visiting Glacier National Park.
            Martin City Park is located right off Highway 2 and the entrance into Martin City. The small-acre site
            boasts the cheapest options for overnight site stays in the area. Included on-site are regularly cleaned
            portapotties, secluded camping spots, and a bear-proof trash can. To locate us turn into Martin City from
            Highway 2. Look immediately left and turn on your next left up the dirt road. Martin City Park is located
            here between Highway 2 and Martin Road. </Typography>
    </Box>)
}

export default Description
