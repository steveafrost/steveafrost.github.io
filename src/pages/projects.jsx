import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ProjectList = styled.ul`
  margin-left: 0;
  list-style: none;
`;

const Project = styled.li`
  margin-bottom: 4rem;
`;

const ProjectTitle = styled.h2`
  margin-top: 0;
`;

export default () => (
  <Layout>
    <ProjectList>
      <Project>
        <ProjectTitle>Blind Tails</ProjectTitle>
        <ul>
          <li>Utilized WordPress & Genesis Framework to create community resource</li>
          <li>Adjusted mock & implementation to meet client needs</li>
          <li>Provided continued maintenance and A/B testing to increase engagement</li>
        </ul>
      </Project>
      <Project>
        <ProjectTitle>PJ Masks Live</ProjectTitle>
        <p>
          Designed & developed website for PJ Masks Live event in collaboration with Disney, eOne
          Entertainment, and Round Room Presents. The website is currently receiving several
          thousand visitors per day and directly contributes to the success of the event.
        </p>
        <ul>
          <li>
            Engineered Middleman and Bourbon approach to allow for use of modern technologies to
            address business needs
          </li>
          <li> Pioneered novel solutions to provide educational opportunity when applicable</li>
          <li> Applied caching and cache-busting techniques to optimally display assets</li>
          <li>Promoted responsible git flow using branching, merging, and code review process</li>
        </ul>
      </Project>
      <Project>
        <ProjectTitle>
          Daily Documentary - Browse, watch, and track today's hottest documentaries around the web
        </ProjectTitle>
        <ul>
          <li>
            Followed RESTful URL patterns & used UI Router to provide structured route management
          </li>
          <li>Configured Active Model Serializer to generate valid JSON from Rails backend</li>
          <li>
            Adhered to Angular styles authored by John Papa to establish uniformity and improve
            readability
          </li>
        </ul>
      </Project>
      <Project>
        <ProjectTitle>Plant Nanny - The personal plant assistant that curates gardener's tips and tricks</ProjectTitle>
        <ul>
          <li>Built internal APIs using Ruby on Rails to render data efficiently</li>
          <li>Implemented Devise to facilitate oAuth and user login</li>
          <li>Leveraged Javascript and jQuery to communicate with API</li>
          <li>Utilized Bootstrap and Font Awesome to coalesce design</li>
        </ul>
      </Project>
      <Project>
        <ProjectTitle>Much Free, Very Wow</ProjectTitle>
        <p>
          Web application built in Sinatra w/ Ruby that allows users to submit free activities to do
          around NYC. Users can modify their own activities and can view activities submitted by
          other users. Planned extendability for a ranking system.
        </p>
      </Project>
      <Project>
        <ProjectTitle>MLB Scoreboard - Up-to-the-minute MLB matchups & box scores for baseball</ProjectTitle>
        <ul>
          <li>Scraped MLB API with Nokogiri to provide most recent data for application</li>
          <li>Utilized Terminal Table to display data in an organized fashion</li>
          <li>Constructed namespaces to organize models to maintain MVC integrity</li>
          <li>Deployed to RubyGems for community use</li>
        </ul>
      </Project>
      <Project>
        <ProjectTitle>Brooklyn Queen Honey</ProjectTitle>
        <ul>
          <li>Built upon Genesis Framework</li>
          <li>Incorporated Google Analytics, WebTools, and W3 Total Cache</li>
          <li>Used existing and client created images within drafted design structure</li>
          <li>Set future date for eCommerce setup and demonstration</li>
        </ul>
      </Project>
      <Project>
        <ProjectTitle>Pittman Home Remodeling</ProjectTitle>
        <ul>
          <li>Built upon Genesis Framework</li>
          <li>SEO setup and optimization through Genesis</li>
          <li>WC3 Total Cache installed and configured</li>
          <li>Hooked into Google Analytics, Google WebTools, and ManageWP</li>
          <li>Migrated existing content/projects to the new platform</li>
          <li>Polished up and optimized project images for web</li>
        </ul>
      </Project>
    </ProjectList>
  </Layout>
);
