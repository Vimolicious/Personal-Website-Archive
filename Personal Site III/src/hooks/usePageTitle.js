import { useStaticQuery, graphql } from 'gatsby';

export default function usePageTitle() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata.title;
}
