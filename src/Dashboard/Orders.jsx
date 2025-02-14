import React from 'react'
import { MdModeEdit,MdDelete } from 'react-icons/md'

const Orders = () => {
    return (
        <div>
            <div className="top">
                <h3>Orders</h3>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Paid</th>
                            <th>Status</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2025-16-4</td>
                            <td>Blandine</td>
                            <td>Yes</td>
                            <td>Pending</td>
                            <td><MdModeEdit /></td>
                            <td><MdDelete /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2025-11-2</td>
                            <td>Afua</td>
                            <td>Yes</td>
                            <td>Shipped</td>
                            <td><MdModeEdit /></td>
                            <td><MdDelete /></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Orders
