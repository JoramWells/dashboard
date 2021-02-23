import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingNewIcon from '@material-ui/icons/PowerSettingsNew'


export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        jdksjkdj
                        <InputBase />

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
