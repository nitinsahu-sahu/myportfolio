import React from "react";
import { Container, Grid, Typography, Paper, useTheme, Box, } from "@mui/material";
import { FaNodeJs, FaReact, FaWordpress,FaAws, FaLaravel, FaGithub } from "react-icons/fa";
import { DiMongodb,DiJqueryLogo ,DiPostgresql} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
    { icon: <FaNodeJs size={40} />, label: "NodeJs", color: "green" },
    { icon: <FaReact size={40} />, label: "ReactJs", color:"#087ea4" },
    { icon: <DiMongodb size={40} />, label: "MongoDB",color: "green" },
    { icon: <SiExpress size={40} />, label: "ExpressJs" },
    { icon: <TbBrandJavascript size={40} />, label: "JavaScript",color: "#ebcc37" },

    { icon: <FaLaravel size={40} />, label: "Laravel",color: "red" },
    { icon: <DiPostgresql size={40} />, label: "PostgreSql",color: "orange" },
    { icon: <DiJqueryLogo size={40} />, label: "JQuery" },
    { icon: <RiTailwindCssFill size={40} />, label: "Tailwind CSS",color:"#087ea4" },
     
    { icon: <FaWordpress size={40} />, label: "WordPress" },
 
     { icon: <FaGithub size={40} />, label: "GitHub" },
     { icon: <FaAws size={40} />, label: "AWS" },
    { icon: <VscVscode size={40} />, label: "VS Editor",color: "#2dadf4" },
];

export default function Expertise() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
                py: 6,
            }}
        >
            <Container maxWidth="lg">
                {/* Section Title */}
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    fontSize={30}
                    sx={{
                        color: theme.palette.mode === "dark" ? "white" : "black",
                        fontWeight: "bold"
                    }}
                >
                    OUR EXPERTISE
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    align="center"
                    sx={{ mb: 4, maxWidth: "800px", mx: "auto", color: "text.secondary" }}
                >
                    I am an expert in full-stack web development, specializing in building responsive and secure React and Node.js applications. I help entrepreneurs and small businesses bring their innovative ideas to life with clean, efficient code.
                </Typography>

                {/* Skills Grid */}
                <Grid container spacing={4} justifyContent="center">
                    {skills.map((skill, index) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={2.4} // ✅ ensures 5 per row
                            display="flex"
                            justifyContent="center"
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor:
                                        theme.palette.mode === "dark" ? "bg-gray-800" : "background.paper",
                                    color: skill.color,
                                    borderRadius: 2,
                                    minWidth: { xs: 125, md: 200 },
                                    textAlign: "center",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        bgcolor:
                                            theme.palette.mode === "dark" ? "#333" : "grey.200",
                                    },
                                }}
                            >
                                {skill.icon}
                                <Typography variant="subtitle2" sx={{ mt: 1 }} fontWeight={700} fontSize={15}>
                                    {skill.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
}
