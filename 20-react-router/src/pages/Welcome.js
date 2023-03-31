import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>this is welcome page </h1>
            <Route path='/welcome/newuser'>
                <p>new user login</p>
            </Route>
        </section>
    )
}
export default Welcome;