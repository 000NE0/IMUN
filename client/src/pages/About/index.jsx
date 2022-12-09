import Layout from 'layouts';
import React from 'react';

function About() {
  return (
    <Layout>
      <main id='main'>
        <div
          class='breadcrumbs d-flex align-items-center'
          style={{ backgroundImage: `url('img/About2.jpg')` }}
        >
          <div
            class='container position-relative d-flex flex-column align-items-center'
            data-aos='fade'
          >
            <h2>About SNSCT IMUN</h2>
            <ol>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>About SNSCT IMUN</li>
            </ol>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
