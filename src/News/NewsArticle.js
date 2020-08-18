import React from 'react'
import './NewsArticle.css'

export default class NewsItemView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // resource_type: '',
            // resource_owner: '',
            // resource: {},
        };
    }

    render() {
        const {resource_type, resource_owner, resource} = this.props;
        if (resource_type === "live") {
            // console.log(resource_type);
            return (
                <NewsLive
                    resource_type = {resource_type}
                    resource_owner = {resource_owner}
                    resource = {resource}
                />
            )
        } else {
            return (
                <NewsArticle
                    resource_type = {resource_type}
                    resource_owner = {resource_owner}
                    resource = {resource}
                />
            )
        }
    }
}

class NewsArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // resource_type: '',
            // resource_owner: '',
            // resource: {},
        };
    }

    render() {
        var source_name = this.props.resource.source_name;
        if (!source_name) {
            source_name = this.props.resource.author.display_name;
        }
        let display_time = this.props.resource.display_time;
        var date = new Date();
        date.setTime(display_time * 1000)
        return (
            <div className="NewsArticle-news">
                <div className="NewsArticle-container">
                    <a className="NewsArticle-news-title"                         
                        href={"https://vip.jianshiapp.com/articles/" + this.props.resource.id}>{this.props.resource.title}
                    </a>
                    <div>
                        <span className="NewsArticle-news-source">{source_name}</span>
                        <time className="NewsArticle-news-time">{date.toLocaleDateString()}</time>
                    </div>
                </div>
                <img className="NewsArticle-news-image" src={this.props.resource.image_uri + "?imageView2/1/w/160/h/160"}></img>
            </div>
        )
    }
}

class NewsLive extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // resource_type: '',
            // resource_owner: '',
            // resource: {},
        };
    }

    render() {
        let score = this.props.resource.score;
        var color = "#333";
        if (score === 2) {
            color = "#ff5959"
        }
        let display_time = this.props.resource.display_time;
        var date = new Date();
        date.setTime(display_time * 1000)
        return (
            <div className="NewsArticle-live">
                <div className="NewsArticle-live-container">
                    <a className="NewsArticle-live-title"
                        href={"https://vip.jianshiapp.com/livenews/" + this.props.resource.id}>
                        <font color={color}>{this.props.resource.content_text}</font>
                    </a>
                    <div className="NewsArticle-live-info">
                        <img className="NewsArticle-live-tag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAiCAMAAAAnKQpfAAABqlBMVEVHcEyhoaGZmZmbm5uZmZmZmZmampqbm5uZmZmbm5ubm5uZmZmampqampqampqZmZmZmZmbm5uZmZmbm5v///+ZmZmZmZn///+bm5ukpKScnJyZmZmZmZmZmZmbm5uampqqqqqZmZmZmZmZmZmZmZmampqZmZmenp6ZmZm2tra/v7+ZmZmenp6ampqampqampqdnZ2ampqZmZmampqZmZmZmZmioqKampqZmZmZmZmhoaGcnJyZmZmbm5uampqZmZmampqampqbm5uZmZmampqampqampqampqampqZmZmampqampqZmZmampqampqZmZmbm5uZmZmlpaWampqZmZmZmZmampqZmZmZmZmampqioqKampqampqampqZmZmampqampqfn5+ampqampqZmZmbm5uZmZmampqZmZmampqZmZmampqampqcnJyZmZmbm5uZmZmcnJyZmZmcnJybm5ubm5uZmZmcnJybm5ubm5ucnJyampqampqampqampqampqZmZmfn5+ampqZmZmZmZmampqampqbm5uampqZmZmampqZmZmZmZmZmZkYX+7pAAAAjXRSTlMAG+ZcGQp3MxRXYSimTEcFD0LnPQEeIwI4DhLhgP1msQlfj9X79FAddgcEcxX8i/kv7fBEmTcLhtoyEza0SnzDcpNj61F5z+Mw85dth8nKoEX2EWrG5FaUkakWkNldVY1TGMyujCHLTty6LW/RTfWE0x94MVRAoywucD7HsFjWnZsQ/sGW27VrK0HlS4rUAzvnAAAB20lEQVQ4y8XV51ebUBgH4BckaCQJGDAxyySuxL1Xh1pH66h7b23V7qGd2uGs+/2fvcRL8ORAlXzx94F7D5yHu+BeAMbBooWwDgaAcfMcWAjHuxlw8GAxvANYziriWECwHLwPtOoSE2WuU38s3obsmJUo8/W229olgJVsmtjdUO+zp3PwWltWpxmqd7lm0EXiv57dwoVYmdiIjaLoMUByvR2je/BRe20OXZOXRGdiJhmqAdqtsuNZ9b5Pkt6hJH3RUCKm6PCEdO9fVB1TCMCjotI8Eu//0PkFQZfHpFZeS5FH7aZNRx9SUeTglKDWI1JtbqFIFIQ42rhgsAEbglsclqSiH9ikzl6NLMu//8ryH9xuVW9noO1tIOBGd+CzH5dSkfIzMeW/9J/tPUVa95oww2SdNgXhW6gyLJCspyClesD8i2iu+xra0e7dQBAImiJf3Sf43hLRUamNoolhKDNB8eIsqKhdS6KKN68o6h+E8IghcvYtk+oiVnkp2mBrKIoW+YamjFB5KKwOAjqLHvnUch5fMNqYxkbHJ3MMUAE+uW4BHhcXPiDF9GwkORHwvJL+PDdQSZe/uyP5kT4sUK+SAjry8j0W9ghFVO5/N7KC0tqW0zoA0jpq0jnUrgA9ALTz8n0sYQAAAABJRU5ErkJggg==" alt="快讯"></img>
                        <time className="NewsArticle-news-time">{date.toLocaleDateString()}</time>
                    </div>
                </div>
            </div>
        )
    }
}