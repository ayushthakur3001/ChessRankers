import classes from './Ranker.module.css'
const Ranker = (props) => {
    const handleclick = (e)=>{
        props.clickId(e);
        

    }
    
    return (
        <div className={classes.ranker}>
            {props.players.map(player =>(
                <div className={classes.list}>
                    
                    <li><span>#{player.rank}</span> {player.name}
                     </li>
                    <button onClick={()=> handleclick(player.id)}
                    
                    >View</button>
                </div>
                
            ))}
            
        </div>
    )
}

export default Ranker
