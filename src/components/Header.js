import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
    root:{
        backgroundColor:"white",
        transform:'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:"#f2f2f2"
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    }
})

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems="center"
                >
                    <Grid item>
                        
                        <InputBase 
                        placeholder="Search course"
                        className={classes.searchInput}
                        startAdornment={< SearchIcon fontSize="sm"/>}
                        />

                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item  >
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                                <PowerSettingNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}
