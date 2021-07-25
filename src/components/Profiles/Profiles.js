import classes from './Profiles.module.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
const Profiles = () => {

        return (

            <div className={classes.profiles}>
            <TwitterIcon className={classes.icont}   />
            <InstagramIcon className={classes.iconi} />
            <FacebookIcon className={classes.iconf} />
            </div>
            
            

            
            
        )
    
}

export default Profiles
