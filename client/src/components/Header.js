import React from 'React';
import { Link } from 'react-router-dom';

export default () => {

        return (
            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/signin'>Sign In</Link>
                </li>
            </ul>
        )
};