import React, {Component, Fragment} from 'react'
import {getDepartments} from "./api";



class Departments extends Component {

    state = {
        loading: false
    }

    getDepartments = async () => {
        const { showLoading, hideLoading } = this.props

        showLoading('Carregando departamentos')

        const response = await getDepartments().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    render() {
        return (
            <button onClick={this.getDepartments}>Buscar departamentos</button>
        )
    }
}

export default Departments