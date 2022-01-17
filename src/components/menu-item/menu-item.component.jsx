import React from "react";
import './menu-item.styles.scss'
import { withRouter } from 'react-router'

const MenuItem = (props) => (
    <div
        className={`${props.size} menu-item`}
        onClick={() => props.history.push(`${props.match.path}${props.linkUrl}`)}
    >
        <div className="background-image" style={{ backgroundImage:`url(${props.imageUrl})` }}>
        </div>
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)


export default withRouter(MenuItem)