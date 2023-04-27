import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

const NewMeetupPage = () => {

    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        fetch('https://wvjke-react-meetups-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(() => {
            navigate('/');
        })
            
    }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
};

export default NewMeetupPage;
