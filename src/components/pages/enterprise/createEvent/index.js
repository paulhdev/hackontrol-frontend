import React from 'react'

import Head from './head'
import Form from './form'

class CreateEvent extends React.Component {
    render() {
        return (
            <div style={{ marginBottom: '30%' }}>
                <Head />
                <Form />
            </div>
        )
    }
}

export default CreateEvent