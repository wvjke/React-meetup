import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';
const MeetupList = ({meetups}) => {
    return (
        <ul className={classes.list}>
        {meetups.map((meetup) => {
            return <MeetupItem  key={meetup.id} 
                                id={meetup.id} 
                                title={meetup.title} 
                                address={meetup.address} 
                                image={meetup.image} 
                                description={meetup.description}/>
        })}
        </ul>
    );
};

export default MeetupList;