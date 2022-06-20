import React from 'react'
import Dashboard from '../../layouts/dashboard'

const Index = () => {
  return (
    <div>Index</div>
  )
}

export default Index

Index.getLayout = function getLayout(page) {
    return (
        <Dashboard>
            {page}
        </Dashboard>
    )
}