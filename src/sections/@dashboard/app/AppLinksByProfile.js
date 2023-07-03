// @mui
import PropTypes from "prop-types";
import {
    Box,
    Card,
    Paper,
    Typography,
    CardHeader,
    Link,
    CardContent,
} from "@mui/material";
// utils
import { styled } from "@mui/material/styles";
import { fShortenNumber } from "../../../utils/formatNumber";
// ----------------------------------------------------------------------

AppLinksByProfile.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    list: PropTypes.array.isRequired,
};

const StyledCover = styled("img")({
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
});

function AppLinksByProfile({
    title,
    subheader,
    list,
    ...other
}) {
    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <CardContent>
                <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                    }}
                >
                    {list.map((site) => (
                        <a href={site.link} className="text-decoration-none">
                            <Paper
                                key={site.name}
                                variant="outlined"
                                sx={{ py: 2.5, textAlign: "center" }}
                            >
                                <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

                                <Typography variant="h6">
                                    {fShortenNumber(site.value)}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    {site.name}
                                </Typography>
                            </Paper>
                        </a>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}
export default AppLinksByProfile;