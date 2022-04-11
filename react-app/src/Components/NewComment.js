import axios from 'axios';
import React, {useState} from 'react';

const NewComment = ({postId, comments}) => {
    const [comment, setComment] = useState();

    const onSubmit = () => {
        console.log({
            comment
        });
        const data = {
            "comments": comment
        }
        axios
        .post(`http://localhost:3002/post/${postId}/comment`, data)
        .then((response) => console.log(response), setComment(data.data))
        .catch((error) => console.log(error));
        }

    return <div>
        <div>
        <input type="text" placeholder="comment" value={comments} onChange={e => setComment(e.target.value)} />
        </div>
        <button style={{ marginTop: '4px'}} onClick={onSubmit}>
        Submit
        </button>
    </div>
}

export default NewComment;