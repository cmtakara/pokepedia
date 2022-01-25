import { useState} from "react";
import { useNavigate } from "react-router-dom"; 
import './styles.css'



// when adding react elements, need to close out all of the inputs (change > to />)
const Login = ({setUser }) => {
// const Login = (props) => {
    // destructuring props and only taking in setUser
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setUserName(e.target.value)
        console.log('in handlechange')
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log('in handlesubmit');
        setUser(userName);

        //we can use useNavigate from rr to redirect our users to a different component/page
        navigate('/pokemon/list')

    }

    // const [user, setUser] = useState('')

    // console.log('props', props.setUser());
    // console.log('props'. setUser())

    return (
        <form className='mx-auto border p-2 m-2' id='login-form' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInpuUser1" className="form-label">Username</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputUser1" 
                    aria-describedby="userHelp" 
                    value={userName}
                    onChange={handleChange}/>
                <div id="userHelp" className="form-text">We'll never share your Username with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login;