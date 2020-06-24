import React, { Fragment } from 'react';
import NewsItemView from './NewsArticle'

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {},
            items: []
        };
    }

    componentDidMount() {
        fetch(
            'https://api-wscn.xuangubao.cn/apiv1/content/information-flow?limit=100&channel=global&accept=article,live&cursor='
        )
        .then(res => res.json())
        .then(data => {
            // console.log(data.data)
            this.setState({
                loading: false,
                data: data.data,
                items: data.data.items
            });
        })
        .catch(error => console.log(error))
        // .catch(function errorBlock(error) {
        //     console.log(error);
        //     this.setState({
        //         loading: false,
        //         data: {},
        //         items: []
        //     });
        // })
    }

    render() {
        if (this.state.loading) {
            return (
            <div>
                <img className="loading"
                    src="http://image.uisdc.com/wp-content/uploads/2015/09/weather.gif" 
                    width="160" 
                    height="120">
                </img>
            </div>)
        } else {
            return(
                <div>
                    {this.state.items.map((item) => {                        
                        return (
                            // <li key={item.id}>
                                <NewsItemView key={item.resource.id}
                                resource_type = {item.resource_type}
                                resource_owner = {item.resource_owner}
                                resource = {item.resource}
                            />
                            // </li>
                        )
                    })}
                </div>
            )
        }
    }
}