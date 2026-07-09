import { StickyNote } from 'lucide-react'
import Section from '../Section'
import './NotesSection.css'

export default function NotesSection({ notes }) {
  return (
    <Section id="additional-information" icon={StickyNote} title="Notes / Additional Information">
      <p className="notes-text">{notes}</p>
    </Section>
  )
}
