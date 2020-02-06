import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [results, setResults] = useState([]);



    async function fetchApi () {
      try{
        const results = await axios({method:'get', url: 'http://my-json-server.typicode.com/alexdr00/mock-data/users'});
        setResults (results.data)
      }catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      fetchApi()
    },[setResults])


  return(
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 p-5 row">
          {results.map(result=> (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card">
                <img src={result.image} alt="user status" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{result.first_name} {result.last_name} </p>
                  <p className="card-text">email: {result.email} </p>
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