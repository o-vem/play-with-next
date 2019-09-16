import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import { login, logout } from '../store/actions'

const Index = (props) => {
    const isServer = typeof window !== 'object'
    // console.log(`inside _app on ${isServer.toString()}`)

    // console.log('props', props)

    const dispatch = useDispatch()

    const fakeData = {
        id: 10,
        firstName: 'Pablo',
        lastName: 'Escobar'
    }
    // console.dir('Frontend Index getInitialProps')

    const user = useSelector(state => state.user)
    // console.log('user', user)

    return (<>
        <p>Is from backend? {props.backend.toString()}</p>
        <p>firstName: {props.data.firstName}</p>
        <p>lastName: {props.data.lastName}</p>

        {user.isLogged ? 'Hi bro!' : 'Who are you?'}
        <p>
            {!user.isLogged && <button onClick={() => dispatch(login(fakeData))}>
                Login
        </button>}
        </p>
        <p>
            {user.isLogged && <button onClick={() => dispatch(logout())}>
                Logout
        </button>}
        </p>
        <p>
            <Link href="/about">
                <a>Go to the about page</a>
            </Link>
        </p>
    </>)
}

Index.getInitialProps = async (props) => {

    // console.dir('Backend Index getInitialProps')
    // console.dir(props)

    const data = {
        id: 100500,
        firstName: 'Ivo',
        lastName: 'Bobul'
    }

    const backendData = {
        backend: true,
        data
    }

    return backendData
}

export default Index