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
        <Typography sx={{margin: '4rem 4rem', fontSize: '1.5rem'}}>Martin City Park is a convenient, budget-friendly camper van and tent site
            for travelers and backpack cyclers visiting Glacier National Park, and the Hungry Horse Reservoir areas.
            Martin City Park is located right off Highway 2 and the entrance into Martin City. The small-acre site
            boasts the cheapest options for overnight site stays in the area. Included on-site are regularly cleaned
            portapotties, ground bike racks, and a garbage/recycling bin. </Typography>
    </Box>)
}

export default Description
