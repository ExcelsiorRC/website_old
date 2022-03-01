import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import instagram from '../../images/about/instagram.svg';

import '../../styles/components/common/contacts.scss';

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      site {
        siteMetadata {
          social {
            git
            instagram
            twitter
            linkdein
            facebook
            mail
          }
        }
      }
    }
  `);
  const social = data.site.siteMetadata?.social;

  const SNSLinkItem = ({ url, img }) =>
    url ? (
      <a className="snslink--item" href={social[url]} target="_blank" rel="noreferrer">
        <img src={img} alt={`${url} icon`} />
      </a>
    ) : null;

  return (
    <div className="contacts">
      <div className="snslink">
        <SNSLinkItem url={'instagram'} img={instagram} />
      </div>
    </div>
  );
};

export default Contacts;
