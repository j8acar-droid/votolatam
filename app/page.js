"use client";
import Link from 'next/link'
import { useState } from 'react'
import mock from '../src/mockData'

export default function Home(){
  const [country, setCountry] = useState('pe')
  const list = mock.getCandidates(country)
  return (
    <main className="container">
      <header className="header">
        <h1>VotoLatam</h1>
        <select value={country} onChange={e=>setCountry(e.target.value)}>
          <option value="pe">Perú</option>
          <option value="mx">México</option>
          <option value="co">Colombia</option>
          <option value="es">España</option>
          <option value="us">USA</option>
          <option value="br">Brasil</option>
        </select>
      </header>
      <p className="subtitle">Explora perfiles verificados — rápido y claro.</p>
      <section className="list">
        {list.map(c => (
          <Link key={c.id} href={`/candidates/${c.id}`} className="card">
            <img src={c.photo} alt="" className="avatar" />
            <div className="meta">
              <div className="name">{c.nombre}</div>
              <div className="desc">{c.partido} • {c.cargo}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
