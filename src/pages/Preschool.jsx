import { Link } from 'react-router-dom'
import { Baby, Star, GraduationCap, Users, Heart, BookOpen, Music, Shield, CheckCircle, ArrowRight } from 'lucide-react'

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
      <style>{`@media (max-width: 768px) { .page-hero-grid { grid-template-columns: 1fr !important; } .page-hero-img { min-height: 50vh; } }`}</style>
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

const LEVEL_CARDS = [
  {
    icon: <Baby size={24} />,
    tag: 'Ages 3',
    title: 'Toddler Casa',
    age: '3 years old',
    body: "Your child's very first classroom. Toddler Casa introduces structured learning through songs, stories, colors, shapes, and guided play. We focus on language development, motor skills, and learning to be with others.",
  },
  {
    icon: <Star size={24} />,
    tag: 'Ages 4',
    title: 'Junior Casa',
    age: '4 years old',
    body: 'Building on Toddler Casa, Junior Casa introduces pre-reading, pre-writing, and early numeracy. Children develop focus, independence, and a growing love of learning through structured activities and creative exploration.',
  },
  {
    icon: <GraduationCap size={24} />,
    tag: 'Ages 5',
    title: 'Kinder',
    age: '5 years old',
    body: 'The bridge between preschool and Grade 1. Kinder students at NSSC develop reading readiness, basic math concepts, and the social-emotional skills needed to thrive in elementary school.',
  },
]

const WHY_FEATURES = [
  { icon: <Users size={22} />, title: 'Small Class Sizes', body: 'Maximum 20 students per class so every child gets the attention they deserve.' },
  { icon: <Heart size={22} />, title: 'Values Formation from Day One', body: 'Honesty, respect, and kindness are woven into every activity — not just talked about.' },
  { icon: <BookOpen size={22} />, title: 'DepEd-Aligned Curriculum', body: 'Our curriculum meets and exceeds DepEd K-12 early childhood education standards.' },
  { icon: <Music size={22} />, title: 'Arts, Music, and Movement', body: 'Creative expression is part of every school day — because children learn best when they move and create.' },
  { icon: <Shield size={22} />, title: 'Safe and Nurturing Environment', body: 'CCTV-monitored classrooms, trained staff, and a secure campus so parents can trust us completely.' },
]

const TIMELINE = [
  { time: '7:30 AM', title: 'Morning Assembly & Prayer', body: "Students gather for morning routines, flag ceremony, and a short prayer to start the day with purpose." },
  { time: '8:00 AM', title: 'Circle Time', body: 'Sharing, calendar, weather, and the day\'s theme introduced through songs and storytelling.' },
  { time: '8:30 AM', title: 'Guided Learning Activities', body: 'Structured activities targeting language, math readiness, and fine motor development.' },
  { time: '9:30 AM', title: 'Snack Time', body: 'Healthy snack break with lessons on proper hygiene and table manners.' },
  { time: '10:00 AM', title: 'Creative Play & Arts', body: 'Drawing, painting, crafts, and imaginative play that develop creativity and self-expression.' },
  { time: '11:00 AM', title: 'Read-Aloud & Story Time', body: 'Teachers read age-appropriate books that build vocabulary and a love of reading.' },
  { time: '11:30 AM', title: 'Dismissal Preparation', body: 'Packing up, prayer, and orderly dismissal with parent coordination.' },
]

export default function Preschool() {
  return (
    <div style={{ background: '#F9FAFB' }}>
      <title>Preschool Program – Toddler Casa, Junior Casa, Kinder | NSSC Sta. Rosa Laguna</title>
      <meta name="description" content="NSSC Preschool in Sta. Rosa, Laguna offers Toddler Casa (age 3), Junior Casa (age 4), and Kinder (age 5). DepEd-aligned, values-integrated, small class sizes. Enroll now." />

      <PageHero
        image="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
        label="PRESCHOOL PROGRAM"
        h1Line1="WHERE LEARNING"
        h1Line2="BEGINS WITH"
        h1Line3="JOY."
        subtext="At NSSC, your child's first school experience is filled with wonder, play, and purpose. We build the foundation that carries them through life."
        ctaText="Enroll Your Child"
        onCtaClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))}
      />

      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>OVERVIEW</SectionLabel>
            <SectionHeading>Three Levels. One Strong Foundation.</SectionHeading>
            <p style={{ color: '#374151', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto' }}>
              NSSC Preschool follows a play-based, values-integrated curriculum that nurtures every child's natural curiosity. Our trained early childhood educators create a safe, loving environment where children learn to communicate, socialize, and think — all while having fun.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {LEVEL_CARDS.map((card, i) => (
              <Card key={i} style={{ background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#1E6B45' }}>{card.icon}</div>
                <span style={{ display: 'inline-block', background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '0.75rem' }}>{card.tag}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>{card.age}</p>
                <p style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.65 }}>{card.body}</p>
              </Card>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .level-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=800" alt="NSSC Preschool classroom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
          <div>
            <SectionLabel />
            <SectionHeading>More Than ABCs and 123s</SectionHeading>
            <p style={{ color: '#374151', lineHeight: 1.75, marginBottom: '2rem' }}>
              We believe the preschool years are the most important years of a child's life. Everything we do — from how we arrange our classrooms to how our teachers speak to children — is intentional and rooted in child development research.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {WHY_FEATURES.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: '#1E6B45', flexShrink: 0, marginTop: '2px' }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>{f.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.65 }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>SAMPLE DAILY SCHEDULE</SectionLabel>
            <SectionHeading>What a Day at NSSC Preschool Looks Like</SectionHeading>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '2px', background: '#1E6B45' }} />
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: i < TIMELINE.length - 1 ? '2rem' : 0, position: 'relative' }}>
                <div style={{ width: '80px', flexShrink: 0, textAlign: 'right', paddingTop: '2px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1E6B45' }}>{item.time}</span>
                </div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#1E6B45', flexShrink: 0, marginTop: '4px', position: 'relative', zIndex: 1 }} />
                <div style={{ paddingBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <SectionHeading>Enrollment Requirements</SectionHeading>
          <div style={{ background: '#F1F1EB', borderRadius: '16px', padding: '2rem', maxWidth: '600px', margin: '0 auto 2rem', textAlign: 'left' }}>
            {[
              'PSA Birth Certificate (original + photocopy)',
              "Parent or Guardian's Valid ID",
              '2x2 ID Photos (2 copies)',
              'Accomplished Enrollment Form (download below)',
              'Baptismal Certificate (if applicable)',
            ].map((req, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <CheckCircle size={18} style={{ color: '#1E6B45', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: '#374151' }}>{req}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{ background: 'transparent', color: '#1E6B45', border: '1.5px solid #1E6B45', borderRadius: '9999px', padding: '0.75rem 1.75rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Download Enrollment Form</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: '9999px', padding: '0.75rem 1.75rem', fontSize: '0.875rem', fontWeight: 600 }}>Enroll Now</button>
          </div>
        </div>
      </section>

      <section style={{ background: '#1E6B45', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <div style={{ fontSize: '6rem', color: 'white', opacity: 0.15, position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
          <p style={{ color: 'white', fontSize: '1.35rem', lineHeight: 1.5, maxWidth: '700px', margin: '0 auto 1rem', fontStyle: 'italic' }}>
            "My daughter used to be shy and wouldn't talk to anyone. After just one year in NSSC Toddler Casa, she became confident, curious, and excited to go to school every day."
          </p>
          <p style={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>— Maria Santos, Parent of Toddler Casa Graduate</p>
        </div>
      </section>

      <section style={{ background: '#F1F1EB', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#111827', marginBottom: '1rem', fontFamily: "'Oswald', sans-serif" }}>Give Your Child the Best Start.</h2>
          <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '1.5rem' }}>S.Y. 2025–2026 enrollment is now open. Limited slots for Toddler Casa, Junior Casa, and Kinder.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600 }}>Enroll Now</button>
            <button style={{ background: 'transparent', color: '#1E6B45', border: '1.5px solid #1E6B45', borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Schedule a Visit</button>
          </div>
        </div>
      </section>
    </div>
  )
}