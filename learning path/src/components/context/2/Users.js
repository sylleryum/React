import React, {Component, Fragment} from 'react'
import {getUsers} from "./api";
import Loading from "./Loading";



class Users extends Component {

    state = {
        loading: false
    }

    getUsers = async () => {
        const { showLoading, hideLoading } = this.props

        showLoading('Carregando usuários')

        const response = await getUsers().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    render() {
        return (
            <button onClick={this.getUsers}>Buscar usuários</button>
        )
    }
}

export default Users