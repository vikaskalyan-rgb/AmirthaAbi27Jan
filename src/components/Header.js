import React, { useState } from 'react'

function Header () {
  const [isInvitationTamil, setIsInvitationTamil] = useState(false);
  
  const scrollToLocation = (e) => {
    e.preventDefault();
    const locationSection = document.getElementById('whenwhere');
    if (locationSection) {
      locationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Add to Calendar functions
  const addToCalendar = (eventType) => {
    let title, startDate, endDate, details, location;
    
    if (eventType === 'reception') {
      title = 'Abishek & Amirthavalli - Wedding Reception';
      startDate = '20260127T180000'; // January 27, 2026, 6:00 PM
      endDate = '20260127T230000';   // January 27, 2026, 11:00 PM
      details = 'Join us for the wedding reception of Abishek and Amirthavalli';
      location = 'Sri Udaya Selvi Palace A/C, Salem, Tamil Nadu';
    } else {
      title = 'Abishek & Amirthavalli - Marriage Ceremony';
      startDate = '20260128T090000'; // January 28, 2026, 9:00 AM
      endDate = '20260128T103000';   // January 28, 2026, 10:30 AM
      details = 'Join us for the wedding ceremony of Abishek and Amirthavalli';
      location = 'Sri Udaya Selvi Palace A/C, Salem, Tamil Nadu';
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const downloadICS = (eventType) => {
    let title, startDate, endDate, details, location;
    
    if (eventType === 'reception') {
      title = 'Abishek & Amirthavalli - Wedding Reception';
      startDate = '20260127T180000';
      endDate = '20260127T230000';
      details = 'Join us for the wedding reception of Abishek and Amirthavalli';
      location = 'Sri Udaya Selvi Palace A/C, Salem, Tamil Nadu';
    } else {
      title = 'Abishek & Amirthavalli - Marriage Ceremony';
      startDate = '20260128T090000';
      endDate = '20260128T103000';
      details = 'Join us for the wedding ceremony of Abishek and Amirthavalli';
      location = 'Sri Udaya Selvi Palace A/C, Salem, Tamil Nadu';
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${eventType}-abishek-amirthavalli.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEventCardClick = (eventType) => {
    if (window.confirm('Add to Calendar?\n\nClick OK for Google Calendar\nClick Cancel to download for Apple/Outlook')) {
      addToCalendar(eventType);
    } else {
      downloadICS(eventType);
    }
  };

  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='hero-overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            {/* Om Gam Ganapataye Namaha - Top */}
            {/* <div className='sacred-chant animate-box' data-animate-effect='fadeInDown'>
              <span className='om-symbol'>ॐ गं गणपतये नमः</span>
            </div> */}
            
            <div className='hero-content'>
              {/* Translate Button */}
              <button 
                className='hero-translate-btn'
                onClick={() => setIsInvitationTamil(!isInvitationTamil)}
                title={isInvitationTamil ? 'Switch to English' : 'Switch to Tamil'}
              >
                {isInvitationTamil ? 'A' : 'அ'}
              </button>
              
              {/* Invitation Message */}
              <div className='invitation-message animate-box' data-animate-effect='fadeInUp'>
                {isInvitationTamil ? (
                  <>
                    <p className='invite-line-2'>எங்கள் திருமண விழாவை கொண்டாட</p>
                    <p className='invite-line-3'>உங்களை அன்புடன் அழைக்கிறோம்</p>
                  </>
                ) : (
                  <>
                    <p className='invite-line-2'>With great joy, we invite you to celebrate</p>
                    <p className='invite-line-3'>The sacred union of</p>
                  </>
                )}
              </div>

              {/* Names - Stacked Layout */}
              <div className='names-section'>
                {/* Groom - Abishek */}
                <div className='name-block animate-box' data-animate-effect='fadeInUp'>
                  <h1 className='name-text'>
                    {isInvitationTamil ? 'அபிஷேக்' : 'Abishek'}
                  </h1>
                  <p className='parent-names'>
                    {isInvitationTamil 
                      ? 'திரு. சுரேஷ் & திருமதி. வேதவல்லி சுரேஷ் அவர்களின் மகன்'
                      : 'Son of Mr. Suresh & Mrs. Vedavalli Suresh'
                    }
                  </p>
                </div>

                {/* Ampersand */}
                <div className='ampersand-wrapper animate-box' data-animate-effect='fadeInUp'>
                  <span className='ampersand-large'>&</span>
                </div>

                {/* Bride - Amirthavalli */}
                <div className='name-block animate-box' data-animate-effect='fadeInUp'>
                  <h1 className='name-text'>
                    {isInvitationTamil ? 'அமிர்தவல்லி' : 'Amirthavalli'}
                  </h1>
                  <p className='parent-names'>
                    {isInvitationTamil 
                      ? 'திரு. ராமானுஜம் & திருமதி. ராஜமணி ராமானுஜம் அவர்களின் மகள்'
                      : 'Daughter of Mr. Ramanujam & Mrs. Rajamani Ramanujam'
                    }
                  </p>
                </div>
              </div>

              {/* Elegant divider */}
              <div className='hero-divider'>
                <span className='divider-line-left'></span>
                <span className='divider-icon'>♥</span>
                <span className='divider-line-right'></span>
              </div>
            
              {/* Subtitle */}
              <p className='hero-subtitle animate-box' data-animate-effect='fadeInUp'>
                {isInvitationTamil 
                  ? 'இரு இதயங்கள், ஒரு ஆத்மா, நித்திய பயணம்'
                  : 'Two Hearts, One Soul, Forever Together'
                }
              </p>

              {/* Event details cards */}
              <div className='event-cards'>
                <div 
                  className='event-card animate-box' 
                  data-animate-effect='fadeInUp'
                  onClick={() => handleEventCardClick('reception')}
                  role='button'
                  tabIndex='0'
                  onKeyPress={(e) => e.key === 'Enter' && handleEventCardClick('reception')}
                >
                  <div className='event-card-inner'>
                    <div className='calendar-icon-badge'>
                      <i className='ti-calendar'></i>
                    </div>
                    <h3 className='event-title'>
                      {isInvitationTamil ? 'வரவேற்பு விழா' : 'Reception'}
                    </h3>
                    <div className='event-date'>
                      {isInvitationTamil ? 'ஜனவரி 27, 2026' : 'January 27, 2026'}
                    </div>
                    <div className='event-time'>
                      {isInvitationTamil ? 'மாலை 6:00 முதல்' : '6:00 PM onwards'}
                    </div>
                    <div className='add-calendar-hint'>
                      <i className='ti-plus'></i> {isInvitationTamil ? 'காலண்டரில் சேர்க்க' : 'Add to Calendar'}
                    </div>
                  </div>
                </div>

                <div 
                  className='event-card animate-box' 
                  data-animate-effect='fadeInUp'
                  onClick={() => handleEventCardClick('ceremony')}
                  role='button'
                  tabIndex='0'
                  onKeyPress={(e) => e.key === 'Enter' && handleEventCardClick('ceremony')}
                >
                  <div className='event-card-inner'>
                    <div className='calendar-icon-badge'>
                      <i className='ti-calendar'></i>
                    </div>
                    <h3 className='event-title'>
                      {isInvitationTamil ? 'திருமண விழா' : 'Marriage Ceremony'}
                    </h3>
                    <div className='event-date'>
                      {isInvitationTamil ? 'ஜனவரி 28, 2026' : 'January 28, 2026'}
                    </div>
                    <div className='event-time'>
                      {isInvitationTamil ? 'காலை 9:00 - 10:30' : '9:00 AM - 10:30 AM'}
                    </div>
                    <div className='add-calendar-hint'>
                      <i className='ti-plus'></i> {isInvitationTamil ? 'காலண்டரில் சேர்க்க' : 'Add to Calendar'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className='hero-buttons'>
                <button 
                  onClick={scrollToLocation}
                  className='btn-primary hero-btn'
                >
                  <i className='ti-location-pin'></i>
                  {isInvitationTamil ? 'இடத்தைப் பார்க்க' : 'View Location'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header