import React from 'react'
import "./Library.css"
import Topcase from './Topcase'
function Library() {
    return (
        <>
            <Topcase heading={"E-Library"} content={"Detailed below are the websites and login credentials of E-Books available for the Institute:"} />
            <div className="library">

                <h1>E - Library</h1>
                <ul className="library__list">
                    <li>
                        <a href="https://www.nitj.ac.in//nitj_files/E-Library/fairuse.pdf">
                            Fair use of E - resources: Guidelines and Usage Policy
                        </a>
                    </li>
                    <li>
                        <a href="https://www.nitj.ac.in/nitj_files/links/E-books_Access_credentiasls_45203.pdf">
                            Access Credentials E-Books
                        </a>
                    </li>
                    <li>
                        <a href="https://www.nitj.ac.in/nitj_files/links/NDL_Registration_62490.pdf">
                            National Digital Library
                        </a>
                    </li>
                </ul>
                <p className="library__timings">
                    <span className="span1"> Library Hours : </span> 9.00 AM to 9.00 PM ( 9.00 AM till 12.00 midnight during examinations).
                </p>
                <div className="table_contents">
                    <table className="library__contacts">
                        <thead className="library__heading">
                            <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dr A K Jana</td>
                                <td>Chairman, Library Committee</td>
                                <td>janaak@nitj.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr Sarbrinder Kaur</td>
                                <td>Librarian</td>
                                <td>kaurs@nitj.ac.in</td>
                            </tr>
                            <tr>
                                <td>Mr Dhanwantari Prakash Tripathi</td>
                                <td>Deputy Librarian</td>
                                <td>tripathidp@nitj.ac.in</td>
                            </tr>
                            <tr>
                                <td>Mr Varun Patney</td>
                                <td>Assistant Librarian</td>
                                <td>patneyv@nitj.ac.in</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Library