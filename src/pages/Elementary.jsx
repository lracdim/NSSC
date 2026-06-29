import { Link } from 'react-router-dom'
import { BookOpen, Globe, Calculator, Palette, Users, Heart, Music, Shield, Award, BookText, Microscope, Monitor, CheckCircle, ArrowRight, Star } from 'lucide-react'

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

const SUBJECTS = [
  { icon: <BookText size={20} />, name: 'Filipino & English Language Arts', desc: 'Strong reading, writing, and communication skills in both Filipino and English — the foundation of all learning.' },
  { icon: <Calculator size={20} />, name: 'Mathematics', desc: 'From basic operations to problem-solving — we build mathematical confidence step by step.' },
  { icon: <Microscope size={20} />, name: 'Science', desc: 'Hands-on experiments and inquiry-based learning that make science exciting and real.' },
  { icon: <Globe size={20} />, name: 'Araling Panlipunan', desc: "Understanding our history, culture, and society as proud Filipinos." },
  { icon: <Heart size={20} />, name: 'Values Education & MAPEH', desc: 'Character formation, music, arts, physical education, and health integrated into daily life.' },
  { icon: <Monitor size={20} />, name: 'Technology & Livelihood Education', desc: 'Age-appropriate digital literacy and practical skills for the modern world.' },
]

const APPROACH = [
  { icon: <Award size={22} />, title: 'Honor Roll & Recognition Program', body: 'Top students are recognized quarterly — motivating excellence while celebrating every child\'s progress.' },
  { icon: <Users size={22} />, title: 'Peer Learning & Group Activities', body: 'Collaborative projects that build teamwork, communication, and leadership skills.' },
  { icon: <BookOpen size={22} />, title: 'Reading Program', body: 'Daily reading time and a school library that builds vocabulary and a lifelong love of books.' },
  { icon: <Star size={22} />, title: 'Science & Math Competitions', body: 'Students represent NSSC in regional and national competitions — building confidence and excellence.' },
]

const GRADES = [
  { grade: 'Grade 1', desc: 'Introduction to formal schooling. Reading readiness, number concepts, and building good study habits.' },
  { grade: 'Grade 2', desc: 'Deepening literacy and numeracy. Students begin reading independently and solving multi-step math problems.' },
  { grade: 'Grade 3', desc: 'Introduction to Science as a subject. Research skills, report writing, and group presentations begin.' },
  { grade: 'Grade 4', desc: 'Higher-order thinking skills. Students analyze, compare, and evaluate — not just memorize.' },
  { grade: 'Grade 5', desc: 'Pre-junior high preparation. More complex subjects, longer projects, and leadership opportunities through class government.' },
  { grade: 'Grade 6', desc: 'Culminating year. National Achievement Test preparation, moving up ceremony, and transition coaching for Junior High.' },
]

export default function Elementary() {
  return (
    <div style={{ background: '#F9FAFB' }}>
      <title>Elementary School – Grades 1 to 6 | NSSC Sta. Rosa Laguna</title>
      <meta name="description" content="NSSC Elementary in Sta. Rosa, Laguna covers Grades 1–6 with DepEd K-12 curriculum, values education, and strong academic programs. Enroll now for S.Y. 2025–2026." />

      <PageHero
        image="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200"
        label="ELEMENTARY PROGRAM"
        h1Line1="BUILDING MINDS"
        h1Line2="THAT ARE READY"
        h1Line3="FOR ANYTHING."
        subtext="Grades 1–6 at NSSC develop academic excellence, strong character, and the confidence every child needs to face the world."
        ctaText="Enroll for Grade School"
        onCtaClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))}
      />

      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>OVERVIEW</SectionLabel>
            <SectionHeading>Six Years That Define a Student</SectionHeading>
            <p style={{ color: '#374151', lineHeight: 1.75, maxWidth: '650px', margin: '0 auto' }}>
              Our Elementary program covers Grades 1 through 6 with a DepEd K-12 curriculum enriched by values education, technology integration, and the arts. Every subject is taught by trained, passionate educators who believe that how a child learns is just as important as what they learn.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '0 0 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>CURRICULUM</SectionLabel>
            <SectionHeading>What Your Child Will Learn</SectionHeading>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {SUBJECTS.map((s, i) => (
              <Card key={i}>
                <div style={{ color: '#1E6B45', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{s.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.65 }}>{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=800" alt="NSSC Elementary classroom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
          <div>
            <SectionLabel>OUR APPROACH</SectionLabel>
            <SectionHeading>More Than High Grades</SectionHeading>
            <p style={{ color: '#374151', lineHeight: 1.75, marginBottom: '2rem' }}>
              At NSSC, we measure success not just by test scores but by how our students grow as people. Our elementary teachers are mentors who know each child by name, understand their strengths, and help them overcome their challenges.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {APPROACH.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: '#1E6B45', flexShrink: 0, marginTop: '2px' }}>{a.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>{a.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.65 }}>{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>GRADE LEVEL BREAKDOWN</SectionLabel>
            <SectionHeading>What to Expect at Each Grade</SectionHeading>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {GRADES.map((g, i) => (
              <Card key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.85rem', borderRadius: '9999px' }}>{g.grade}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.65 }}>{g.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <SectionHeading>Enrollment Requirements — Elementary</SectionHeading>
          <div style={{ background: '#F1F1EB', borderRadius: '16px', padding: '2rem', maxWidth: '600px', margin: '0 auto 2rem', textAlign: 'left' }}>
            {[
              'PSA Birth Certificate (original + photocopy)',
              'Form 138 / Report Card from previous school',
              'Good Moral Certificate from previous school',
              '2x2 ID Photos (2 copies)',
              'Accomplished Enrollment Form',
              'Certificate of Completion (for incoming Grade 1)',
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
            "My son struggled with reading in his old school. After transferring to NSSC Grade 3, his teacher gave him extra attention and by Grade 4 he was top of his class. I wish we had transferred sooner."
          </p>
          <p style={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>— Roberto Dela Cruz, Parent of Grade 5 Student</p>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#111827', marginBottom: '1rem', fontFamily: "'Oswald', sans-serif" }}>Enroll Your Child in Grade School Today.</h2>
          <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '1.5rem' }}>S.Y. 2025–2026 enrollment is now open.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600 }}>Enroll Now</button>
            <button style={{ background: 'transparent', color: '#1E6B45', border: '1.5px solid #1E6B45', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Schedule a Campus Tour</button>
          </div>
        </div>
      </section>
    </div>
  )
}