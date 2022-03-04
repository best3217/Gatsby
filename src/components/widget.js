import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'

const Widget = (props) => {
    return (
        <div className="widget text-center py-3 mb-3">
            <div className="widget-title text-white mb-2"> {props.title} </div>
            <div className="widget-price text-white mb-1">
                <span> {props.price} </span>
                <span className="text-uppercase ms-1"> {props.unit} </span>
            </div>
            {props.state==undefined ? <div style={{height: 20}} /> :
                <div style={{fontSize: 14}}>
                { props.state==='up'? 
                    <span className="price-up">
                        <FontAwesomeIcon icon={faUpLong} />
                        {props.percent + '%'}
                    </span> : 
                    <span className="price-down">
                        <FontAwesomeIcon icon={faDownLong} />
                        {props.percent + '%'}
                    </span> }
                <span style={{color:'#4d505c'}}> was {props.lastPrice + '\xa0' }{(props.unit===undefined) ? '' : String(props.unit).toUpperCase()} last day</span>
            </div> }
            
        </div>       
    )
}

export default Widget;