import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@context/AppContext';
import { getPostsUrl } from 'utils/client/apiUrl';
import Post from '@components/Post/Post';
import PostModal from '@components/Post/PostModal';
import promiseUtil from 'utils/client/promiseUtil';

const PostsContainer = () => {
  const {
    state: { showPostModal },
  } = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    promiseUtil.get(getPostsUrl()).then((posts) => setPosts(posts.data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          img={post.img}
          author={post.author}
          description={post.description}
          liked={post.liked}
          saved={post.saved}
          place={post.place}
          likes={post.likes}
          date={post.date}
        />
      ))}
      {showPostModal && <PostModal />}
    </div>
  );
};

export default PostsContainer;
