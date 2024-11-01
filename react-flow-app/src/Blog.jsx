import Post from "./Post";

function Blog() {
    const posts = [
         { title: 'First Post', body: 'This is about the body of the first post' },
        { title: 'Second Post', body: 'This is about the body of the second post' },
        { title: 'Third Post', body: 'This is about the body of the third post' }
    ];

    return (
        <>
            {posts.map((post, index) => (
              <Post
              key={index}
            title={post.title}
            body={post.body} />
)
)}
  </>
    );
}

export default Blog;
