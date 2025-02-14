import React from 'react'

const Contacts = () => {
    return (
        <div>
            <div className="top">
                <h3>Contacts</h3>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Names</th>
                            <th>E-mail</th>
                            <th>Message</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>UWITONZE Afua</td>
                            <td>uwitonzeafuwahamissi@gmail.com</td>
                            <td>Hello, I wanted to inquire more about the products you posted on your web</td>
                            <td>Reply</td>
                            <td>Delete</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>KAYITESI Aline</td>
                            <td>alinek@gmail.com</td>
                            <td>Hello, I wanted to inquire more about the products you posted on your web</td>
                            <td>Reply</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Contacts
