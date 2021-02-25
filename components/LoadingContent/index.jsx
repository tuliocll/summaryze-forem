import ContentLoader from "react-content-loader";

function LoadingContent() {
  return (
    <div className="markdown-preview">
      <ContentLoader viewBox="0 0 380 150" animate backgroundColor="#707070">
        <rect x="0" y="5" rx="4" ry="4" width="300" height="13" />
        <rect x="0" y="30" rx="3" ry="3" width="350" height="13" />
        <rect x="0" y="55" rx="3" ry="3" width="150" height="13" />
        <rect x="0" y="80" rx="3" ry="3" width="250" height="13" />
        <rect x="0" y="105" rx="3" ry="3" width="100" height="13" />
        <rect x="0" y="130" rx="3" ry="3" width="350" height="13" />
      </ContentLoader>
    </div>
  );
}

export default LoadingContent;
