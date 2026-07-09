import { FileStack, FileText } from 'lucide-react'
import Section from '../Section'
import './DocumentsSection.css'

export default function DocumentsSection({ documents }) {
  return (
    <Section id="documents" icon={FileStack} title="Documents">
      {documents.length === 0 ? (
        <p className="documents-empty">No documents have been uploaded for this loan yet.</p>
      ) : (
        <div className="documents-grid">
          {documents.map((doc, i) => (
            <div key={i} className="document-card">
              <span className="document-card__icon">
                <FileText size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className="document-card__name">{doc.name}</p>
                <p className="document-card__size">{doc.size}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
