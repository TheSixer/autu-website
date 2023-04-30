import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPost from "./BlogPost";

const NewsList = (props) => {

  return (
    <section className="news-list">
      <Container>
        <Row>
          <BlogPost
            postImage="/assets/images/blog/blog-1-1.jpg"
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage="/assets/images/blog/blog-1-2.jpg"
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage="/assets/images/blog/blog-1-3.jpg"
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage="/assets/images/blog/blog-1-1.jpg"
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage="/assets/images/blog/blog-1-2.jpg"
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage="/assets/images/blog/blog-1-3.jpg"
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
        </Row>
      </Container>
    </section>
  );
};

export default NewsList;
