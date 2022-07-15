import PostList from "@components/PostList";
import Container from "@components/Container";
import Footer from "@components/Footer";
import metadata from "@data/metadata";
import { PostListContainer } from "@components/custom-tw-components";
import PageBanner from "@components/PageBanner";
import LanguageSelector from "@components/LanguageSelector";

const BlogLayout = ({ posts }) => {
  const customMeta = {
    title: `${metadata.title} - Blog`,
  };

  return (
    <Container page={"blog"} customMeta={customMeta}>
      <PageBanner
        title={"Blue Log"}
        subtitle={
          "If you're a living organism, failure in life is inevitable. We fail by default -- so let's learn from it."
        }
      />
      <LanguageSelector />
      <PostListContainer>
        <PostList posts={posts} />
      </PostListContainer>
      <Footer />
    </Container>
  );
};

export default BlogLayout;
