import React, {useState} from 'react';
import Avatar from "../Avatar/Avatar";


function Props() {

  const [isOn, setIsOn] = useState(false);
  const [isUp, setIsUp] = useState(true);


  const handleButtonClick = () => {
    setIsOn(true);
    setIsUp(false);
  }

  const avatars = [{
    name: 'Number one',
    image: 'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg',
    motto: 'I do not think of all the misery but of the beauty that still remains..'
  },
    {
      name: 'Number two',
      image: 'https://www.elopak.com/wp-content/uploads/2019/12/shutterstock_516051958-1024x683.jpg',
      motto: 'Everything has beauty, but not everyone sees it...'
    },
    {
      name: 'Number three',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp1BupFEWIa6_um5ARB5XwHt39nc8bNZ8wzcLXefaFBU5t2yt2',
      motto: 'The future belongs to those who believe in the beauty of their dreams...'
    }]

  return(
    <>
      <ul>
        {avatars.map((avatar, i)=><Avatar onButtonClick={handleButtonClick} name={avatar.name} image={avatar.image} motto={avatar.motto} key={i}/>)}
      </ul>
      <h1>Have you click on it ? {isOn ? 'On!!': 'Off :(' }</h1>



    </>

  )
}

export default Props;