import { Link } from 'react-router-dom'
import { Users, Heart, BookOpen, Music, Shield, Award, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

function PageHero({ image, label, h1Line1, h1Line2, h1Line3, subtext, ctaText, onCtaClick }) {
  return (
    <section style={{ background: '#FFFFFF', minHeight: '85vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '75vh' }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 4rem', background: '#FFFFFF' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block' }} />
            <span style={{ color: '#1E6B45', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 600 }}>{label}</span>
          </div>
          <h1 style={{ margin: '0 0 1rem', lineHeight: 1.05 }}>
            <div style={{ color: '#111827', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.01em', textTransform: 'uppercase' }}>{h1Line1}</div>
            <div style={{ color: '#111827', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.01em', textTransform: 'uppercase' }}>{h1Line2}</div>
            <div style={{ color: '#1E6B45', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.01em', textTransform: 'uppercase' }}>{h1Line3}</div>
          </h1>
          <p style={{ color: '#374151', fontSize: '1rem', lineHeight: 1.75, maxWidth: '420px', marginBottom: '2rem' }}>{subtext}</p>
          <div>
            <button onClick={onCtaClick} style={{ background: '#1E6B45', color: 'white', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>{ctaText} <ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <span style={{ display: 'inline-block', color: '#1E6B45', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
      {children}
    </span>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111827', marginBottom: '1rem', lineHeight: 1.2 }}>
      {children}
    </h2>
  )
}

function Card({ children, style: styleProp }) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)', border: '1px solid #E5E7EB', padding: '1.5rem', ...styleProp }}>
      {children}
    </div>
  )
}

const STATS = [
  { num: '4', label: 'Grade Levels (7–10)' },
  { num: '20+', label: 'Subjects Offered' },
  { num: '100%', label: 'Transition Rate to Senior High' },
  { num: '15+', label: 'Clubs and Organizations' },
]

const CURRICULUM = ['English', 'Filipino', 'Mathematics', 'Science', 'Araling Panlipunan', 'TLE', 'MAPEH', 'ESP', 'Edukasyon sa Pagpapakatao', 'Computer Science', 'Research', 'Physical Education']

const GRADES = [
  { grade: 'Grade 7', desc: 'Transition from Elementary. Students adjust to departmentalized classes, multiple teachers, and increased academic responsibility. Introduction to research and scientific method.' },
  { grade: 'Grade 8', desc: 'Deeper subject specialization. Science becomes Biology-focused. Math introduces Algebra. Students begin exploring career interests through TLE.' },
  { grade: 'Grade 9', desc: 'Leadership development. Students run class government, join clubs, and take on school projects. Science shifts to Chemistry and Physics concepts.' },
  { grade: 'Grade 10', desc: 'Final year of Junior High. National Achievement Test (NAT) preparation. Strand exploration for Senior High. Immersion and community service projects.' },
]

const STUDENT_LIFE = [
  {
    title: 'Student Council & Leadership',
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: 'Every grade level has its own class officers. JHS students can run for school-wide positions and develop real leadership experience.',
  },
  {
    title: 'Science & Math Competitions',
    img: 'https://images.pexels.com/photos/8617984/pexels-photo-8617984.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: 'NSSC regularly fields students in district, division, and regional academic competitions — and we bring home medals.',
  },
  {
    title: 'Arts, Sports & Culture',
    img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: 'From basketball to theater to dance — our extracurricular programs develop the whole student, not just the academic one.',
  },
]

export default function JuniorHigh() {
  const [openAccordion, setOpenAccordion] = useState(null)

  return (
    <div style={{ background: '#F9FAFB' }}>
      <title>Junior High School – Grades 7 to 10 | NSSC Sta. Rosa Laguna</title>
      <meta name="description" content="NSSC Junior High School in Sta. Rosa, Laguna offers Grades 7–10 with DepEd K-12 curriculum, leadership programs, and strong academic preparation for Senior High." />

      <PageHero
        image="https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=1200"
        label="JUNIOR HIGH SCHOOL"
        h1Line1="DISCOVER WHO"
        h1Line2="YOU ARE MEANT"
        h1Line3="TO BECOME."
        subtext="Grades 7–10 at NSSC are where students find their voice, develop critical thinking, and build the confidence to lead."
        ctaText="Enroll in Junior High"
        onCtaClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))}
      />

      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>OVERVIEW</SectionLabel>
            <SectionHeading>Four Years of Growth, Discovery, and Preparation</SectionHeading>
            <p style={{ color: '#374151', lineHeight: 1.75, maxWidth: '700px', margin: '0 auto' }}>
              Junior High School at NSSC is designed for the most transformative years of a student's life. Grades 7 to 10 go beyond textbook learning — we develop young people who can think critically, work collaboratively, and lead with integrity.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {STATS.map((s, i) => (
              <Card key={i} style={{ textAlign: 'center', background: '#FFFFFF' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#1E6B45', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.85rem', color: '#374151', marginTop: '0.5rem' }}>{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg?auto=compress&cs=tinysrgb&w=800" alt="NSSC Junior High classroom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
          <div>
            <SectionLabel>CURRICULUM</SectionLabel>
            <SectionHeading>A Curriculum Built for the Real World</SectionHeading>
            <p style={{ color: '#374151', lineHeight: 1.75, marginBottom: '2rem' }}>
              Our Grades 7–10 curriculum follows the DepEd K-12 framework with enriched content that goes deeper than the standard. Students don't just memorize — they analyze, create, and present.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {CURRICULUM.map((subj, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={14} style={{ color: '#1E6B45', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: '#374151' }}>{subj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>GRADE BREAKDOWN</SectionLabel>
            <SectionHeading>What Happens at Each Grade Level</SectionHeading>
          </div>
          <div>
            {GRADES.map((g, i) => (
              <div key={i} style={{ marginBottom: i < GRADES.length - 1 ? '1rem' : 0 }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div>
                    <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '9999px', marginRight: '0.75rem' }}>{g.grade}</span>
                  </div>
                  <ChevronDown size={18} style={{ color: '#1E6B45', transform: openAccordion === i ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
                </button>
                {openAccordion === i && (
                  <div style={{ padding: '1rem 1.5rem', background: '#FFFFFF', borderLeft: '3px solid #1E6B45', borderRight: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', borderRadius: '0 0 12px 12px', marginTop: '-2px' }}>
                    <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7 }}>{g.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionHeading>Life Beyond the Classroom</SectionHeading>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {STUDENT_LIFE.map((item, i) => (
              <Card key={i} style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <SectionHeading>Enrollment Requirements — Junior High</SectionHeading>
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '2rem', maxWidth: '600px', margin: '0 auto 2rem', textAlign: 'left' }}>
            {[
              'Form 138 / Report Card (Grade 6 for Grade 7 / current grade for transferees)',
              'Good Moral Certificate',
              'PSA Birth Certificate (original + photocopy)',
              '2x2 ID Photos (2 copies)',
              'Accomplished Enrollment Form',
            ].map((req, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <CheckCircle size={18} style={{ color: '#1E6B45', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: '#374151' }}>{req}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{ background: 'transparent', color: '#1E6B45', border: '1.5px solid #1E6B45', borderRadius: '9999px', padding: '0.75rem 1.75rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Download Form</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: '9999px', padding: '0.75rem 1.75rem', fontSize: '0.875rem', fontWeight: 600 }}>Enroll Now</button>
          </div>
        </div>
      </section>

      <section style={{ background: '#1E6B45', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <div style={{ fontSize: '6rem', color: 'white', opacity: 0.15, position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
          <p style={{ color: 'white', fontSize: '1.35rem', lineHeight: 1.5, maxWidth: '700px', margin: '0 auto 1rem', fontStyle: 'italic' }}>
            "NSSC JHS pushed me in ways I didn't expect. By Grade 9 I was leading our class government, presenting research papers, and winning in district competitions. It prepared me completely for Senior High."
          </p>
          <p style={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>— Angelo Reyes, STEM Graduate, Batch 2024</p>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#111827', marginBottom: '1rem', fontFamily: "'Oswald', sans-serif" }}>Ready for Junior High at NSSC?</h2>
          <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '1.5rem' }}>S.Y. 2025–2026 enrollment is now open for Grades 7–10.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600 }}>Enroll Now</button>
            <button style={{ background: 'transparent', color: '#1E6B45', border: '1.5px solid #1E6B45', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Talk to an Adviser</button>
          </div>
        </div>
      </section>
    </div>
  )
}