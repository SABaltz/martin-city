import background from "../../photos/hungry-horse-99.jpg";
import Box from "@mui/material/Box";

function Home(){
    return(
        <Box
            sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '90vh',
                position: 'relative',
            }}
        >

        </Box>
    )
}

export default Home
