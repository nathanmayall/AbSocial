import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client'
import { Button, Confirm, Icon } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../util/graphql';
import Tooltip from './Tooltip';

// import {  } from "";

function DeleteButton({ postId, commentId, callback }){
    const [confirmOpen, setConfirmOpen] = useState(false); 
    const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION

        const [deletePostorMutation] = useMutation(mutation, { 
            update(proxy){
                setConfirmOpen(false);
               if(!commentId){
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                });

               let newData = data.getPosts.filter(p => p.id !== postId);
                proxy.writeQuery({
                     query: FETCH_POSTS_QUERY,
                     data: { ...data, getPosts: { newData } }
                    });

               }
                if(callback) callback();
            }, 
            variables: {
                postId,
                commentId
            }
        });
    return(
        <>
        <Tooltip content={commentId ? 'Delete comment' : 'Delete post'}>
        <Button as="div" color="red" floated="right" onClick={() => setConfirmOpen(true)}>
            <Icon name="trash" style = {{ margin: 0 }} />
            </Button>
            </Tooltip> 
        <Confirm 
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={deletePostorMutation}
            />
            </>
    )
};

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const DELETE_COMMENT_MUTATION = gql`
    mutation deleteComment($postId: ID!, $commentId: ID!){
        deleteComment(postId: $postId,  commentId: $commentId){
            id
            comments{
                id
                username
                createdAt
                body
            }
            commentCount
        }
    }

`;

export default DeleteButton