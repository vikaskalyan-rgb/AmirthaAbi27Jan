import React, { useState } from 'react'
import storyImage from '../assets/images/1.jpg'

function Story () {
  const [isInvitationTamil, setIsInvitationTamil] = useState(false);

  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-40 text-center'>
            <span className='section-subtitle'>INVITATION</span>
            <h2 className='section-title'>The Beginning of Forever</h2>
          </div>
        </div>
        
        {/* Full Width Image */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='story-image-container'>
              <img src={storyImage} className='story-main-image' alt='Varsha and Vikas' />
            </div>
          </div>
        </div>

        {/* Content Below Image */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='story-content-wrapper'>
              <div className='story-quote-section'>
                <span className='quote-mark-left'>"</span>
                <h3 className='story-quote-text'>Together in love, bound by tradition</h3>
                <span className='quote-mark-right'>"</span>
              </div>

              <div className='story-paragraphs'>
                <p className='story-lead'>
                  <span className='heart-icon'>♥</span> Through trials we walked, hand in hand,
                </p>

                <p className='story-line'>Dreams tested by time, yet love would withstand.</p>
                <p className='story-line'>Every storm only strengthened our flame,</p>
                <p className='story-line'>Every struggle carved out destiny’s name.</p>

                <p className='story-line'>Now the dawn of forever is finally here,</p>
                <p className='story-line'>A union born of hope, of laughter, of tears.</p>
                <p className='story-line'>With hearts entwined, our journey is true,</p>
                <p className='story-line'>We invite you to witness love’s dream come through.</p>

                <p className='story-lead'>
                  <span className='heart-icon'>♥</span> Who are ready to build a lifetime together, heart to heart, soul to soul
                </p>
              </div>

              <div className='story-divider'>
                <span className='divider-line-left'></span>
                <span className='divider-heart'>♥</span>
                <span className='divider-line-right'></span>
              </div>

              <div className='invitation-section'>
                <button 
                  className='invitation-translate-btn'
                  onClick={() => setIsInvitationTamil(!isInvitationTamil)}
                  title={isInvitationTamil ? 'Switch to English' : 'Switch to Tamil'}
                >
                  {isInvitationTamil ? 'A' : 'அ'}
                </button>

                {isInvitationTamil ? (
                  <>
                    <h4 className='invitation-heading'>ஒன்றாக இருப்பது அழகான இடம்.</h4>
                    <p className='invitation-paragraph'>
                      எங்கள் திருமண விழாவிற்கு உங்களை அழைக்க நாங்கள் மிகவும் ஆசீர்வதிக்கப்பட்டவர்களாக உணர்கிறோம். 
                      உங்கள் பிரசன்னம் எங்கள் சிறப்பு நாளை இன்னும் அர்த்தமுள்ளதாக மாற்றும்.
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className='invitation-heading'>Together is a beautiful place to be.</h4>
                    <p className='invitation-paragraph'>
                      We feel incredibly blessed to invite you to our wedding celebration. 
                      Your presence will make our big day even more meaningful.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story