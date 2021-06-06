import React from 'react'
import {UserDetail} from "../../../models/UserDetail";
interface ModalState {
  data?: UserDetail
}
export const ItemUser:React.FC<ModalState> =({data}) => {
  console.log(data)
  return (
    <React.Fragment>
        <tr>
          <td>
            {data?.id}
          </td>
          <td className="py-1">
            <img src={data?.avatar} alt="image"/>
          </td>
          <td>
            {data?.name}
          </td>
          <td>
            {data?.email}
          </td>
          <td>
            {data?.phone}
          </td>
      </tr>
    </React.Fragment>
  )
}
