import React from 'react'

const Loading = ({isLoading, err}) => {
    if (isLoading) {
        return <div>Loading</div>
    } else if (err) {
        return <div>someting is wrong</div>
    }
    return null
} 

export default Loading