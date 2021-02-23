import '../App.css';
import SideMenu from '../components/SideMenu';
import {CssBaseline, makeStyles} from "@material-ui/core"
import Header from '../components/Header';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'
import PageHeader from '../components/PageHeader';

const useStyles = makeStyles({
  appMain:{
    paddingLeft:"250px",
    width:'100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
    <SideMenu />
    <div className={classes.appMain}>
    <Header />
    <PageHeader
    title="Page header"
    
    subTitle="Page description"
    icons={<PeopleOutlineTwoToneIcon />}
     />
    </div>
    <CssBaseline />
    </>

  );
}

export default App;
