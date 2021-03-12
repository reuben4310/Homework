import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <>
                <br />
                <form method="POST" action="http://localhost/login">
                    <label>
                        username:
                  <input type="text" name="name" />
                    </label>
                    <label>
                         password:
                  <input type="text" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>

        );
    }
}
