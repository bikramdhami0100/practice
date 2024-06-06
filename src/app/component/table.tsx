import { log } from 'console';
import React from 'react'

export default function Table({data}:any) {

    
  return (

          <tr>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.email}</td>
            <td>{data.mobilenumber}</td>
          </tr>
      

  )
}
