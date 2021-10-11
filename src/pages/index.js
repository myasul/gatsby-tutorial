import React from 'react'
import Layout from '../components/layout'
import Metadata from './metadata'

const Index = () => {
    return (
        <Layout>
            <Metadata title='Home' description='This is my home page'/>
            <h1>Home page</h1>
            <h2>I'm Matt, a web developer, a coffee enthusiasts, and all-around good guy.</h2>
        </Layout>
    )
}

export default Index
