import React from 'react'
import './PeopleTable.css'
export default function PeopleTable({content}) {
  return (
    <div>
        <table>
            <thead> 
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody> 

        {content.map((person, key) => (
            <tr key={key}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
            </tr>
        ))}
        {/* {console.log(content)} */}
        </tbody>
        </table>
    </div>
  )
}
