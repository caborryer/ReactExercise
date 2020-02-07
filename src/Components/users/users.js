import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlashMessage from '../error/FlashMessage';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});


    async function fetchApi () {
      try{
        const results = await axios({method:'get', url: 'http://my-json-server.typicode.com/alexdr00/mock-data/users'});
        setUsers (results.data)
        setError({})

      }catch (error) {
       setError(error)
      }
    }

    useEffect(()=>{
      fetchApi()
    },[users])

  let FMessage = <FlashMessage type="error" message= {error.message} />

  return(

    <div className="container">
      {error.message? (FMessage) : ''}
      <div className="row justify-content-center">
        <div className="col-12 p-5 row">
          {users.map(user=> (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card">
                <img src={user.image} alt="user status" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{user.first_name} {user.last_name} </p>
                  <p className="card-text">email: {user.email} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Users;