import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";

const Login = () => {
    const {data: session} = useSession();
    return (
        <div>
            {session ? (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            ) : (
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
        </div>
    );
};

export default Login;
