import React from 'react'
import {Link} from 'react-router-dom'

const SeriesListItem = (props) => (

    <li >
        <Link to={`/series/${props.series.show.id}`}>
        {props.series.show.name}
        </Link>
    </li>

);

const SeriesList = (props) =>{
    return (<div>
        <ul className={"series-list"}>
            {
                props.list.map(series =>
                    (<SeriesListItem series={series} key={series.show.id}/>)
                )
            }
        </ul>
    </div>)
};

export default SeriesList;