import { notFound } from 'next/navigation'
import mock from '../../../src/mockData'
import Link from 'next/link'

export default function CandidatePage({ params }){
  const { id } = params
  const c = mock.getById(id)
  if(!c) return notFound()
  return (
    <main className="container">
      <Link href="/" className="back">← Volver</Link>
      <div className="profile">
        <img src={c.photo} className="profileImg" alt="" />
        <div className="profileMeta">
          <h1>{c.nombre}</h1>
          <div className="desc">{c.partido} • {c.cargo}</div>
          <p className="summary">{c.summary}</p>
          <a href={c.source_url} target="_blank" rel="noreferrer" className="source">Fuente oficial</a>
        </div>
      </div>
    </main>
  )
}
