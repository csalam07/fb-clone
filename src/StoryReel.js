import React, {useState, useEffect} from 'react';
import { useStateValue } from './StateProvider';
import Story from './Story';
import './StoryReel.css';
import db from './firebase';

function StoryReel({image}) {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
           setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
       );
   }, []);

   const [{ user }, dispatch] = useStateValue();
   
    return (
        <div className="storyReel">
           <div className="container">
            {posts.map((posts) => (
            <Story 
               key={posts.id}
               src={posts.data.image}
               profileSrc={posts.data.profilePic}
               title={posts.data.username}
            />
            ))}
             <Story 
               src="https://images.unsplash.com/photo-1603027632285-234a04d7414c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profileSrc="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhhbmRzb21lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title="Prasant Poudell"
            />
            <Story 
               src="https://images.unsplash.com/photo-1593489062665-9f26fa627d73?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGdoYW50YWdoYXIlMjBuZXBhbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profileSrc="https://images.unsplash.com/photo-1535546125792-dd417e0f8f87?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNtaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
               title="Ellis jerry"
            />
             <Story 
               src="https://images.unsplash.com/photo-1580465446361-8aae5321522b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c21pbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profileSrc="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
               title="Angel Priya"
            />
            <Story 
               src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
               profileSrc="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21pbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
               title="Sanjay Malla"
            />
           </div>
        </div>
    )
}

export default StoryReel
