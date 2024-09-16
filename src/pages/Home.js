import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/users");
            setUsers(result.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    return (
      <div className='container'>
          <div className='py-4'>
              <table className="table border shadow"
                  style={{
                      border: "2px solid rgba(158, 143, 241, 1)", 
                      borderRadius: "20px",  // Sadece dış köşeleri yuvarlar
                      overflow: "hidden"      // Köşelerin düzgün görünmesini sağlar
                  }}>
                  <thead style={{
                      borderBottom: "2px solid rgba(158, 143, 241, 1)"
                  }}>
                      <tr>
                          <th scope="col" style={{
                              backgroundColor: "rgba(241, 199, 227, 1)",
                              border: "1px solid rgba(158, 143, 241, 1)"
                          }}>#
                          </th>
                          <th scope="col" style={{
                              backgroundColor: "rgba(241, 199, 227, 1)",
                              border: "1px solid rgba(158, 143, 241, 1)",
                              padding:"20px"
                          }}>Name
                          </th>
                          <th scope="col" style={{
                              backgroundColor: "rgba(241, 199, 227, 1)",
                              border: "1px solid rgba(158, 143, 241, 1)"
                          }}>Username
                          </th>
                          <th scope="col" style={{
                              backgroundColor: "rgba(241, 199, 227, 1)",
                              border: "1px solid rgba(158, 143, 241, 1)"
                          }}>Email
                          </th>
                          <th scope='col'style={{
                                 backgroundColor: "rgba(241, 199, 227, 1)",
                              border: "1px solid rgba(158, 143, 241, 1)"
                          }}>action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          users.map((user, index) => (
                              <tr key={user.id}>
                                  <th scope="row" style={{
                                      border: "1px solid rgba(158, 143, 241, 1)"
                                  }}>{index + 1}</th>
                                  <td style={{
                                      border: "1px solid rgba(158, 143, 241, 1)"
                                  }}>{user.name}</td>
                                  <td style={{
                                      border: "1px solid rgba(158, 143, 241, 1)"
                                  }}>{user.username}</td>
                                  <td style={{
                                      border: "1px solid rgba(158, 143, 241, 1)"
                                  }}>{user.email}</td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </div>
      </div>
  );
  

}
