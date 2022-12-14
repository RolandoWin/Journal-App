import { TurnedInNot } from '@mui/icons-material';
import { Box, Drawer, Toolbar, Divider, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';


export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer 
                variant='permanent' //temporary
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar >
                    <Typography variant='h6' noWrap component='div' >
                        Rolando Lázaro
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'].map( text => (
                            <ListItem key={text} disabledpadding='true' >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={ 'Fugiat laboris reprehenderit mollit et ipsum' } />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            
        </Box>
    )
}