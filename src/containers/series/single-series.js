import React, {Component} from 'react'

class SingleSeries extends Component {
   state = {
       show:null
   };

   componentDidMount(){
       const id = this.props.match.params.id;

       fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
           .then(response =>response.json() )
           .then(data=> this.setState({show:data}));
   }
    render() {
       const {show} = this.state;
        return(
            <div>
                {
                    show !== null
                    &&
                        <div>
                            <p>{show.name}</p>
                            <p>{show.premiered}</p>
                            <p>{show.rating.average}</p>
                            <p><img src={show.image.medium} /></p>
                        </div>

                }
            </div>
        )
    }


}

export default SingleSeries;