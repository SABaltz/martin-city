import {centerVertHoriz} from "../../global-parameters/Styles";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Description() {
    return (<Box sx={{
        width: '100vw',
        ...centerVertHoriz
    }}>
        <Typography sx={{margin: '4rem 4rem'}}>Martin City Park is a convenient, budget-friendly campervan and tent site
            for travelers and backpack cyclers visiting Glacier National Park, and the Hungry Horse Reservoir areas.
            Martin City Park is located right off Highway 2 and the entrance into Martin City. The small-acre site
            boasts the cheapest options for overnight site stays in the area. Included on-site are regularly cleaned
            portapotties, ground bike racks, and a garbage/recycling bin. Reservations can be made following the
            link. </Typography>
    </Box>)
}

export default Description
