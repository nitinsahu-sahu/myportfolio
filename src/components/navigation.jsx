import React, { useState, useEffect } from "react";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    Menu as MenuIcon,
    DarkMode as DarkModeIcon,
    LightMode as LightModeIcon,
    Close as CloseIcon,
} from "@mui/icons-material";

const navItems = [
    ["Expertise", "expertise"],
    ["History", "history"],
    ["Projects", "projects"],
    ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }) {
    const { mode } = parentToChild;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileOpen(false);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            className={`h-full flex flex-col ${mode === "dark" ? "bg-gray-900" : "bg-white"}`}
        >
            <div className={`flex justify-between items-center p-4 ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
                <span className={`font-bold ${mode === "dark" ? "text-white" : "text-gray-900"}`}>Menu</span>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon className={mode === "dark" ? "text-white" : "text-gray-900"} />
                </IconButton>
            </div>

            <List className="flex-grow">
                {navItems.map(([text, id]) => (
                    <ListItem key={id} disablePadding>
                        <ListItemButton
                            onClick={() => scrollToSection(id)}
                            className={`${mode === "dark" ? "hover:bg-gray-800 text-white" : "hover:bg-gray-100 text-gray-900"}`}
                        >
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <div className={`p-4 ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={modeChange}
                    startIcon={mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                    className={mode === "dark" ? "text-white border-white" : "text-gray-900 border-gray-900"}
                >
                    {mode === "dark" ? "Light Mode" : "Dark Mode"}
                </Button>
            </div>
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                className={`transition-all duration-300 ${scrolled
                    ? mode === "dark"
                        ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
                        : "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent shadow-none"
                    }`}
                sx={{
                    boxShadow: "none",
                    backgroundImage: "none",
                    color: mode === "dark" ? "white" : "black",
                }}
            >
                <Toolbar className="flex justify-between">
                    {/* Logo or brand name - hidden on mobile, shown on tablet and up */}
                    <div className={`hidden sm:block font-bold text-lg ${mode === "dark" ? "text-white" : "text-gray-900"}`}>
                        Nitin S.
                    </div>

                    {/* Desktop/Tablet Navigation - hidden on mobile */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                        {navItems.map(([text, id]) => (
                            <Button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                sx={{
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    mx: 1,
                                    color: mode === "dark" ? "white" : "black",
                                    "&:hover": {
                                        color: mode === "dark" ? "blue.400" : "blue.600",
                                        backgroundColor: "transparent"
                                    }
                                }}
                            >
                                {text}
                            </Button>
                        ))}
                    </Box>

                    <div className="flex items-center">
                        {/* Theme toggle - always visible */}
                        <IconButton
                            onClick={modeChange}
                            className={`hidden sm:block mr-2 ${mode === "dark" ? "text-blue-400 hover:bg-gray-800" : "text-blue-600 hover:bg-gray-100"}`}
                            aria-label="Toggle theme"
                        >
                            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>

                        {/* Mobile menu button - only visible on mobile */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: "none" } }}
                            className={mode === "dark" ? "text-white" : "text-gray-900"}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Mobile navigation drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: isTablet ? "320px" : "280px",
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Add padding to prevent content from being hidden behind the fixed navbar */}
            <Toolbar />
        </Box>
    );
}

export default Navigation;