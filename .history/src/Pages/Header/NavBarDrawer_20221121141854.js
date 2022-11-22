import { Drawer, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const NavBarDrawer = ({toggleDrawer,state}) => {
    return (
        <Drawer
        open={state}
        onClose={toggleDrawer(false)}
        >
            <ListItemButton>
                <ListItemText>
                    Home
                </ListItemText>
            </ListItemButton>
        </Drawer>
    );
};

export default NavBarDrawer;