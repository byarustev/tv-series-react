import React, {Component} from 'react'
import SeriesList from "./serieslist";
import logo from '../../logo.svg';
import Intro from "../../components/intro/intro";

class Series extends Component{
    state = {
        series:[],
        seriesName:'',
        isFetching:false
    };

    // componentDidMount(){
    //     fetch("http://api.tvmaze.com/search/shows?q=Vikings")
    //         .then(response=>response.json())
    //         .then(json=>this.setState({series:json}))
    // }

    on_series_input_change = e => {
        this.setState({seriesName:e.target.value, isFetching:true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response=>response.json())
            .then(json=>this.setState({series:json}));

        this.setState({isFetching:false});
    };

    render(){
        const {series, seriesName, isFetching} = this.state;

        return  <div>
            <Intro message={"Here you can find your most loved series"}/>
            The length of the series {this.state.series.length}
            <div><input name={"search"} value={seriesName} onChange={this.on_series_input_change} /></div>

            {
                !isFetching && series.length === 0 && seriesName.trim() === ''
                && <p>Please enter series Name in search field.</p>
            }
            {
                !isFetching && series.length === 0 && seriesName.trim() !== ''
                && <p>Series with this search key not found.</p>
            }
            {
                isFetching && <img src={logo} className="App-logo" alt="logo" />
            }
            {
                !isFetching && <SeriesList list={this.state.series}/>
            }

            </div>
    }
}

export default Series;