import React from 'react'
import { MdModeEdit, MdDelete } from 'react-icons/md'

const Customers = () => {
    return (
        <div>
            <div className="top">
                <h3>Customers</h3>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Orders</th>
                            <th>Total Spent</th>
                            <th>Location</th>
                            <th>Last Order</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Blandine</td>
                            <td>blandine250@gmail.com</td>
                            <td>1</td>
                            <td>$250</td>
                            <td>Kigali-Rwanda</td>
                            <td>2025-16-4</td>
                            <td><MdModeEdit className='edit' /></td>
                            <td><MdDelete className='delete' /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Afua Hamissi</td>
                            <td>uwitonzeafuwahamissi@gmail.com</td>
                            <td>2</td>
                            <td>$50</td>
                            <td>Kigali-Rwanda</td>
                            <td>2025-02-1</td>
                            <td><MdModeEdit className='edit' /></td>
                            <td><MdDelete className='delete' /></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Customers
