import { Drawer, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const NavBarDrawer = () => {
    return (
        <Drawer open={true}>
            <ListItemButton>
                <ListItemText>
                    Home
                </ListItemText>
            </ListItemButton>
        </Drawer>
    );
};

export default NavBarDrawer;