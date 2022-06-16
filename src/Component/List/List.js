
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const List = () => {
    const [user] = useAuthState(auth);

    const [candidate, setCandidate] = useState([]);

    useEffect(() => {

        fetch('candidate.json')
            .then(res => res.json())
            .then(data => setCandidate(data));


    }, [])


    return (
        <section>
            <div>
                <h2>Candidates List: {candidate.length}</h2>
                <div class="overflow-x-auto">
                    <table class="table w-full mt-5">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Email</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                candidate.map((a, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{a.name}</td>
                                        <td>{a.Date}</td>
                                        <td>{user.email}</td>
                                        <td><div class="dropdown dropdown-hover">
                                            <label tabindex="0" class="  m-1">Short List</label>
                                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
                                                <li><a>Select</a></li>
                                                <li><a>Reject</a></li>
                                            </ul>
                                        </div>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <p><small><Link className='text-primary text-xl mt-10' to="/createcandidate">Create A Candidate +</Link></small></p>


                </div>

            </div>

        </section>
    );
};

export default List;
