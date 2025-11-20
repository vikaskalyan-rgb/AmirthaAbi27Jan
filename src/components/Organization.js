import React, { useState } from 'react'
import ceremony1 from '../assets/images/ceremony 1.png'
import ceremony2 from '../assets/images/ceremony 2.png'
import ceremony3 from '../assets/images/ceremony 3.png'
import ceremony4 from '../assets/images/ceremony 4.png'
import ceremony5 from '../assets/images/ceremony 5.png'
import ceremony6 from '../assets/images/ceremony 6.png'
import ceremony7 from '../assets/images/ceremony 7.png'
import ceremony8 from '../assets/images/ceremony 8.png'

function Organization () {
  const [translations, setTranslations] = useState({});

  const ceremonies = [
    {
      number: "01",
      title: "VRATHAM",
      titleTamil: "விரதம்",
      description: "This is conducted to convey a message to the groom that he has to prepare himself to move from Brahmacharyam (Bachelor) to Grahasthashramam (Married life). Prayers will be conducted to seek the blessings of the ancestors.",
      descriptionTamil: "மாப்பிள்ளை பிரம்மச்சர்யம் (இளங்காலம்) முதல் கிரஹஸ்தாஷ்ரமம் (திருமண வாழ்க்கை) நோக்கி தன்னை தயார்படுத்திக் கொள்ள வேண்டும் என்பதை உணர்த்த இது நடத்தப்படுகிறது. முன்னோர்களின் ஆசீர்வாதத்தைப் பெற பிரார்த்தனைகள் நடத்தப்படும்.",
      image: ceremony1
    },
    {
      number: "02",
      title: "Nichayathartham",
      titleTamil: "நிச்சயதார்த்தம்",
      description: "Nichayathartham is the formal engagement ceremony, where families agree to the marriage and officially announce the engagement and the wedding date",
      descriptionTamil: "நிச்சயதார்த்தம் என்பது முறையான நிச்சயதார்த்த விழா ஆகும், இதில் குடும்பங்கள் திருமணத்திற்கு ஒப்புக்கொள்கின்றன மற்றும் நிச்சயதார்த்தம் மற்றும் திருமண தேதியை அதிகாரப்பூர்வமாக அறிவிக்கின்றன.",
      image: ceremony7
    },
    {
      number: "03",
      title: "Reception",
      titleTamil: "வரவேற்பு விழா",
      description: "A gathering where love is celebrated and blessings are received. A moment to cherish joy with family and friends. A beginning marked with laughter, light, and togetherness.",
      descriptionTamil: "அன்பு கொண்டாடப்படும் மற்றும் ஆசீர்வாதங்கள் பெறப்படும் ஒரு கூட்டம். குடும்பம் மற்றும் நண்பர்களுடன் மகிழ்ச்சியை போற்றும் தருணம். சிரிப்பு, ஒளி மற்றும் ஒற்றுமையுடன் குறிக்கப்பட்ட ஒரு தொடக்கம்.",
      image: ceremony8
    },
    {
      number: "04",
      title: "KASI YATRAI",
      titleTamil: "காசி யாத்திரை",
      description: "The groom decides to give up worldly pleasures and prepares to go to Kasi to lead the life of an ascetic. The parents and the Guru advise the groom to marry the bride and enter Grahastashrama (sacred family life).",
      descriptionTamil: "மாப்பிள்ளை உலக இன்பங்களை விட்டுவிட்டு துறவியின் வாழ்க்கையை நடத்த காசிக்கு செல்ல முடிவு செய்கிறார். பெற்றோரும் குருவும் மாப்பிள்ளைக்கு மணப்பெண்ணை மணந்து கிரஹஸ்தாஸ்ரமத்தில் (புனித குடும்ப வாழ்க்கை) நுழைய அறிவுரை கூறுகின்றனர்.",
      image: ceremony2
    },
    {
      number: "05",
      title: "THE 'OONJAL' CEREMONY",
      titleTamil: "ஊஞ்சல் விழா",
      description: "The bride and the groom sit on the swing. Friends and relatives display their talent in classical music, providing festivity to the atmosphere. The oonjal (swing) signifies the ups and downs of life.",
      descriptionTamil: "மணமக்கள் ஊஞ்சலில் அமர்கின்றனர். நண்பர்கள் மற்றும் உறவினர்கள் பாரம்பரிய இசையில் தங்கள் திறமையை வெளிப்படுத்துகின்றனர், சூழலுக்கு கொண்டாட்ட மனநிலையை வழங்குகின்றனர். ஊஞ்சல் வாழ்க்கையின் ஏற்ற தாழ்வுகளைக் குறிக்கிறது.",
      image: ceremony3
    },
    {
      number: "06",
      title: "MANGALYA DHARANAM",
      titleTamil: "மாங்கல்ய தாரணம்",
      description: "The most precious moment in one's life. The bride sits on her father's lap. The groom ties the Mangalya Sutra around the bride's neck with prayers for his well-being and for her to live a hundred years.",
      descriptionTamil: "ஒருவரின் வாழ்க்கையில் மிகவும் விலைமதிப்பற்ற தருணம். மணமகள் தன் தந்தையின் மடியில் அமர்கிறாள். மாப்பிள்ளை தனது நல்வாழ்வுக்காகவும், மணமகள் நூறு ஆண்டுகள் வாழ வேண்டும் என்றும் பிரார்த்தனையுடன் தாலியைக் கட்டுகிறார்.",
      image: ceremony4
    },
    {
      number: "07",
      title: "PANIGRAHANAM",
      titleTamil: "பாணிக்ரஹணம்",
      description: "The groom holds the bride's right hand and recites the marriage vows in four mantras. He prays to Agni, Saraswathi, and Vayu for blessings, long life, and confluence of mind.",
      descriptionTamil: "மாப்பிள்ளை மணமகளின் வலது கையைப் பிடித்து நான்கு மந்திரங்களில் திருமண சபதங்களை ஓதுகிறார். அக்னி, சரஸ்வதி மற்றும் வாயுவிடம் ஆசீர்வாதம், நீண்ட ஆயுள் மற்றும் மனதின் ஒற்றுமைக்காக பிரார்த்தனை செய்கிறார்.",
      image: ceremony5
    },
    {
      number: "08",
      title: "NALANGU",
      titleTamil: "நலங்கு",
      description: "The evening of the marriage day is the time to relax and play. The newly-wed wife calls her husband for play, inviting him through a song. Much to the merriment of all gathered, there follows a series of playful events and laughter.",
      descriptionTamil: "திருமண நாள் மாலை ஓய்வெடுக்கவும் விளையாடவும் நேரம். புதுமணத் தம்பதியர் விளையாட்டுக்காக ஒருவரையொருவர் அழைக்கின்றனர். கூடியிருப்பவர்கள் அனைவரும் மகிழ்ச்சியுடன், விளையாட்டு நிகழ்வுகள் மற்றும் சிரிப்பு தொடர்கின்றன.",
      image: ceremony6
    }
  ];

  const toggleTranslation = (index) => {
    setTranslations(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div id='organization' className='organization section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30 text-center'>
            <span className='oliven-title-meta'>Vivaha Subhamuhurtham</span>
          </div>
        </div>
        <div className='ceremonies-list'>
          {ceremonies.map((ceremony, index) => (
            <div key={index} className='ceremony-item'>
              <div className='ceremony-image-wrapper'>
                <img src={ceremony.image} alt={ceremony.title} className='ceremony-image' />
                <div className='image-border-effect'></div>
              </div>
              <div className='ceremony-text'>
                <div className='ceremony-header'>
                  <h2 className='custom-font ceremony-number'>{ceremony.number}</h2>
                  <button 
                    className='invitation-translate-btn'
                    onClick={() => toggleTranslation(index)}
                    aria-label={translations[index] ? 'Show English' : 'Show Tamil'}
                    title={translations[index] ? 'Switch to English' : 'Switch to Tamil'}
                  >
                    {translations[index] ? 'A' : 'அ'}
                  </button>
                </div>
                <h5 className='ceremony-title'>
                  {translations[index] ? ceremony.titleTamil : ceremony.title}
                </h5>
                <div className='title-underline'></div>
                <p className='ceremony-description'>
                  {translations[index] ? ceremony.descriptionTamil : ceremony.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Organization