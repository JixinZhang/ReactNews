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
        this.requestList();
    }

    requestList(next_cursor) {
        fetch(
            'https://api-wscn.xuangubao.cn/apiv1/content/information-flow?limit=200&channel=global&accept=article,live&cursor=' + {next_cursor}
        )
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setTimeout(() => {
                this.setState({
                    loading: false,
                    data: data.data,
                    items: data.data.items
                });
            }, 1000);
        })
        .catch(error => console.log(error))
    }

    render() {
        if (this.state.loading) {
            return (
            <div align="center">
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
                                <NewsItemView key={item.resource.id}
                                resource_type = {item.resource_type}
                                resource_owner = {item.resource_owner}
                                resource = {item.resource}
                            />
                        )
                    })}
                </div>
            )
        }
    }
}