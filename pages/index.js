import { useState, useEffect } from 'react';
export default function Home(){
  const [data,setData]=useState({toko:{},products:[]});
  const [q,setQ]=useState('');
  useEffect(()=>{fetch('/data/products.json').then(r=>r.json()).then(setData).catch(()=>fetch('/products.json').then(r=>r.json()).then(setData).catch(()=>{}))},[]);
  const filtered=data.products?.filter(p=>p.n.toLowerCase().includes(q.toLowerCase()))||[];
  const toko=data.toko||{};
  return (
    <div style={{background:'#050a14',color:'#fff',minHeight:'100vh',padding:16,fontFamily:'Arial'}}>
      <div style={{maxWidth:600,margin:'0 auto'}}>
        <div style={{display:'flex',gap:12,alignItems:'center',background:'#0a1120',border:'1px solid #1e2a4a',borderRadius:16,padding:12}}>
          <div style={{width:44,height:44,borderRadius:12,background:'linear-gradient(135deg,#00e5ff,#0066ff)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900}}>U</div>
          <div><div style={{fontWeight:800}}>{toko.nama||'UBAYTECH BLORA'}</div><div style={{fontSize:10,color:'#00e5ff'}}>{toko.slogan}</div></div>
          <a href={`https://wa.me/${toko.wa}?text=Halo%20Ubay`} target="_blank" style={{marginLeft:'auto',background:'#25D366',color:'#000',padding:'6px 12px',borderRadius:99,fontWeight:800,fontSize:11,textDecoration:'none'}}>WA</a>
        </div>
        <div style={{margin:'12px 0',background:'#111a2e',border:'1px solid #1e2a4a',borderRadius:12,padding:10}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="🔍 Cari LCD, Baterai..." style={{width:'100%',background:'#0a1120',border:'1px solid #1e2a4a',borderRadius:10,padding:10,color:'#fff'}}/>
        </div>
        <div style={{display:'grid',gap:8}}>
          {filtered.map(p=>(
            <div key={p.id} style={{background:'#111a2e',border:'1px solid #1e2a4a',borderRadius:12,padding:10,display:'flex',gap:10,alignItems:'center'}}>
              <div style={{width:36,height:36,borderRadius:8,background:'#0a1120',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12}}>{p.k?.[0]}</div>
              <div style={{flex:1}}><div style={{fontWeight:700,fontSize:13}}>{p.n}</div><div style={{fontSize:11,color:'#00e5ff'}}>Rp {p.h?.toLocaleString()} • Stok {p.s}</div></div>
              <a href={`https://wa.me/${toko.wa}?text=${encodeURIComponent(`Halo Ubay, cek ${p.n} stok ${p.s}`)}`} target="_blank" style={{background:'#25D366',color:'#000',padding:'6px 10px',borderRadius:8,fontWeight:800,fontSize:11,textDecoration:'none'}}>WA</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
