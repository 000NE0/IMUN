import React from 'react';

function QuoteForm() {
  return (
    <div className='col-lg-5' data-aos='fade-out'>
      <form action='forms/quote.php' method='post' className='php-email-form'>
        <h3>Get a quote</h3>
        <p>
          Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam.
          Rerum repellendus enim linead sero park flows.
        </p>
        <div className='row gy-3'>
          <div className='col-md-12'>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Name'
              required
            />
          </div>

          <div className='col-md-12 '>
            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Email'
              required
            />
          </div>

          <div className='col-md-12'>
            <input
              type='text'
              className='form-control'
              name='phone'
              placeholder='Phone'
              required
            />
          </div>

          <div className='col-md-12'>
            <textarea
              className='form-control'
              name='message'
              rows='6'
              placeholder='Message'
              required
            ></textarea>
          </div>

          <div className='col-md-12 text-center'>
            <div className='loading'>Loading</div>
            <div className='error-message'></div>
            <div className='sent-message'>
              Your quote request has been sent successfully. Thank you!
            </div>

            <button type='submit'>Get a quote</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuoteForm;
