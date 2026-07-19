import { useState, useMemo } from 'react';
import data from '../data/products.json';

export default function Home() {
  const [q, setQ] = useState('');
  const [cart, setCart] = useState([]);
  const toko = data.toko || {};

  const filtered = useMemo(() => {
    return (data.products || []).filter(p =>
      p.n.toLowerCase().includes(q.toLowerCase()) ||
      p.k?.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  const addToCart = (p) => {
    setCart(c => [...c, p]);
    alert(`${p.n} masuk keranjang!`);
  };

  const waCheckout = () => {
    if(cart.length===0) return alert('Keranjang kosong');
    const list = cart.map(p=>`- ${p.n} Rp ${p.h.toLocaleString()}`).join('%0A');
    const total = cart.reduce((s,p)=>s+p.h,0);
    const msg = `Halo UBAYTECH BLORA%0A%0ASaya mau pesan:%0A${list}%0A%0ATotal: Rp ${total.toLocaleString()}%0A%0AAlamat: `;
    window.open(`https://wa.me/${toko.wa}?text=${msg}`,'_blank');
  };

  return (
    <div style={{background:'#050a14',color:'#fff',minHeight:'100vh',fontFamily:'Inter, Arial',overflowX:'hidden'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap'); *{font-family:Inter}`}</style>

      <div style={{position:'sticky',top:0,zIndex:50,background:'rgba(5,10,20,0.9)',backdropFilter:'blur(12px)',borderBottom:'1px solid #1e2a4a',padding:'12px 16px',display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:44,height:44,borderRadius:12,background:'linear-gradient(135deg,#00e5ff,#0066ff)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,boxShadow:'0 0 20px rgba(0,229,255,0.4)'}}>U</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:900,letterSpacing:1,fontSize:15}}>UBAYTECH<span style={{color:'#00e5ff'}}>•</span></div>
          <div style={{fontSize:8,letterSpacing:3,color:'#00e5ff',fontWeight:700}}>SPAREPART TERLENGKAP • BLORA • EST 2018</div>
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={waCheckout} style={{background:'#0a1120',border:'1px solid #1e2a4a',borderRadius:99,padding:'8px 14px',display:'flex',gap:8,alignItems:'center',color:'#fff'}}>
            🛒 <span style={{background:'#ff6a00',borderRadius:99,padding:'0 7px',fontSize:11,fontWeight:800}}>{cart.length}</span>
          </button>
          <a href={`https://wa.me/${toko.wa}`} target="_blank" style={{background:'#00e5ff',color:'#000',borderRadius:99,padding:'8px 14px',fontWeight:800,fontSize:12,textDecoration:'none'}}>WA Owner UBAY</a>
        </div>
      </div>

      <div style={{padding:16}}>
        <div style={{background:'#0f1a33',border:'1px solid #1e2a4a',borderRadius:99,padding:'12px 16px',display:'flex',gap:10}}>
          <span>⌕</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari LCD, IC, baterai, MCB..." style={{background:'transparent',border:'none',outline:'none',color:'#fff',flex:1}}/>
        </div>
      </div>

      <div style={{margin:'8px 16px',background:'#0a1120',border:'1px solid #1e2a4a',borderRadius:99,padding:'8px 12px',display:'flex',gap:10,alignItems:'center',fontSize:10,letterSpacing:2}}>
        <span style={{width:24,height:24,background:'#00e5ff',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center'}}>🔧</span>
        OWNER UBAY • NO 1 DI BLORA • BUKA 08.00 - 21.00
      </div>

      <div style={{padding:'24px 16px'}}>
        <h1 style={{fontSize:32,lineHeight:1.1,fontWeight:900,margin:0}}>Sparepart Elektronik<br/><span style={{color:'#00e5ff'}}>& Handphone</span><br/>Terlengkap di Blora</h1>
        <p style={{color:'#8a9bb5',fontSize:13,lineHeight:1.6,marginTop:12}}>Pusat grosir & eceran komponen elektronik, sparepart HP, alat servis, dan perlengkapan listrik. Dipercaya 1200+ teknisi se-Kabupaten Blora. Garansi toko, harga teknisi.</p>
        <div style={{display:'flex',gap:10,marginTop:20}}>
          <a href="#produk" style={{background:'#00e5ff',color:'#000',padding:'14px 22px',borderRadius:99,fontWeight:800,textDecoration:'none',fontSize:13}}>Belanja Sekarang →</a>
          <a href={`https://wa.me/${toko.wa}`} style={{border:'1px solid #1e2a4a',padding:'14px 22px',borderRadius:99,fontWeight:700,textDecoration:'none',color:'#fff',fontSize:13}}>Firmware Center</a>
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,padding:'0 16px'}}>
        {[
          {i:'⚡',t:'Ready Stok Blora',d:'Tidak perlu nunggu kirim dari luar kota',c:'#0a2a3a'},
          {i:'💰',t:'Harga Teknisi',d:'Diskon khusus untuk mitra servis',c:'#2a1f0a'},
          {i:'🛡️',t:'Garansi Toko',d:'Ganti baru jika cacat pabrik',c:'#1a1040'},
          {i:'🧑‍💼',t:'Support UBAY',d:'Konsultasi kerusakan via WA gratis',c:'#0a2a2a'},
        ].map(f=>(
          <div key={f.t} style={{background:`linear-gradient(135deg,${f.c},#0a1120)`,border:'1px solid #1e2a4a',borderRadius:16,padding:14}}>
            <div style={{width:32,height:32,background:'#050a14',borderRadius:99,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10}}>{f.i}</div>
            <div style={{fontWeight:800,fontSize:12}}>{f.t}</div>
            <div style={{fontSize:10,color:'#8a9bb5',marginTop:4}}>{f.d}</div>
          </div>
        ))}
      </div>

      <div id="produk" style={{padding:16,marginTop:20}}>
        <h2 style={{fontSize:18,fontWeight:900}}>Katalog Produk ({filtered.length})</h2>
        <div style={{display:'grid',gap:10,marginTop:12}}>
          {filtered.map(p=>(
            <div key={p.id} style={{background:'#0f1a33',border:'1px solid #1e2a4a',borderRadius:14,padding:12,display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:48,height:48,borderRadius:10,background:'#050a14',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>{p.k?.[0]||'📦'}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:13}}>{p.n}</div>
                <div style={{fontSize:11,color:'#00e5ff'}}>Rp {p.h?.toLocaleString()} • Stok {p.s} • {p.k}</div>
              </div>
              <button onClick={()=>addToCart(p)} style={{background:'#00e5ff',border:'none',padding:'8px 12px',borderRadius:8,fontWeight:800,fontSize:11}}> + Keranjang</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{textAlign:'center',padding:20,fontSize:10,color:'#5a6b8a'}}>
        📍 {toko.alamat} • 📷 {toko.ig} • ⏰ Buka 08.00-21.00<br/>© 2024 UBAYTECH BLORA - Est 2018
      </div>
    </div>
  );
}
