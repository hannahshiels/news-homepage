import { Box, Link, useTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import Text from "../../shared/constants/Text"

const Footer = () => {
    const theme = useTheme()
    return (
        <Box sx={{position:"fixed", bottom:0, width:"100%", background:theme.palette.neutral.neutral}} textAlign={"center"} >
            <Typography color="neutral.dark"  variant="body2" > {Text.FooterChallengeBy} <Link underline="none" href={Text.FooterChallengeByLink}> {Text.FooterChallengeByFM} </Link></Typography>
            <Typography color="neutral.dark" variant="body2"> {Text.FooterCodedBy}  <Link underline="none" href={Text.FooterCodedByLink}> {Text.FooterCodedByH} </Link> ❤ </Typography>
        </Box>
    )
}

export default Footer