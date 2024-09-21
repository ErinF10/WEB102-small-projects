import React from "react"

const Event = (props) => {
    return (
        <>
            <td className={"Event " + props.color}>
                <h5>{props.name}</h5>
                {props.color === 'green' ? (
                    <h6>Remote</h6>
                ) : props.color === 'pink' ? (
                    <h6>Brooklyn College</h6>
                ) : props.color === 'yellow' ? (
                    <h6>Remote</h6>
                ) : (
                    <h6>Unknown</h6>
                )}
                
            </td>
        </>
    )
}

export default Event