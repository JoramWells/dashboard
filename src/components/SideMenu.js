import React from 'react'
import './index.css'
import {makeStyles} from "@material-ui/core"
//makeStyles with styles

const useStyles = makeStyles({
    sideMenu:{
        display:"flex",
        position:"absolute",
        backgroundColor:"teal",
        height:"100%",
        width:"250px",
        flexDirection:"column"
    

    }
})

export default function SideMenu() {
    const classes = useStyles()
    return (
        <>
        <div className={classes.sideMenu}>

        </div>
            
        </>
    )
}
