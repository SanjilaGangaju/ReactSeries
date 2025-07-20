export function Greeting({isLoggedIn, user}){
    return (
    <>
        <h1>
            {isLoggedIn ? `Welcome back, ${user.name}!`: `Welcome, Guest!`}
        </h1>
    </>
    );
}
