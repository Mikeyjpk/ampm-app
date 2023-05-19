'use client'

import Container from './components/Container';
import HeaderImage from './components/eventDisplay/HeaderImage';
import EventDisplay from './components/eventDisplay/EventDisplay';

export default function Home() {
  return (
    <div>
      <HeaderImage/>
      <Container>
        < EventDisplay 
          // HEADER
          title='ANTI//SOCIAL'
          shortDate="Jun 10"
          subtitle="Alternative, Rock, Pop-Punk & Emo Anthems from 10:00pm 'til they kick us out, every Saturday night."
          allAges={false}

          // EVENT INFO
          fullDate='Sat, 10 Jun 2023 8:00 PM'
        />
      </Container>
    </div>
  )
}

