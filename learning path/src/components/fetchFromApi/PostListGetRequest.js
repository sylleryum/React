import React, {Component} from 'react';
import axios from 'axios'

class PostListGetRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                //console.log(`${response}`)
                let toAdd = []
                for (let i = 0; i < 4; i++) {
                    toAdd.push(response.data[i])
                }
                this.setState({posts: toAdd})
            })
            .catch(error => {
                console.log(`error`)
            })
    }

    render() {
        const {posts} = this.state
            //console.log(`ooooo`)
            //console.log(`${posts[2]}`)
            //console.log(`ooooo`)
        return (
            <div>
                ->list of posts
                {
                        posts.map(post => <div key={post.id}>{post.title}</div>)
                }
                -------end of list-------
            </div>
        );
    }
}

export default PostListGetRequest;