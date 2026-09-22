'use client';

import {useEffect,useMemo,useState} from 'react';

const API=process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000/api/v1';

type Good={id:string;name:string;description:string;price:number;image:string;stock:number;sizes?:string;brand?:{name:string};category?:{name:string}};
type News={id:string;title:string;text:string;createdAt:string};

export default function Home(){
 const [goods,setGoods]=useState<Good[]>([]),[news,setNews]=useState<News[]>([]),[q,setQ]=useState('');
 const [cart,setCart]=useState<Record<string,number>>({}),[selected,setSelected]=useState<Good|null>(null),[cartOpen,setCartOpen]=useState(false);
 useEffect(()=>{fetch(`${API}/goods?q=${encodeURIComponent(q)}`).then(r=>r.ok?r.json():Promise.reject()).then(setGoods).catch(()=>setGoods([]))},[q]);
 useEffect(()=>{fetch(`${API}/news`).then(r=>r.ok?r.json():Promise.reject()).then(setNews).catch(()=>setNews([]))},[]);
 const allGoods=goods;
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const total=useMemo(()=>allGoods.reduce((s,x)=>s+(cart[x.id]||0)*x.price,0),[allGoods,cart]);
 const add=(id:string)=>setCart(c=>({...c,[id]:(c[id]||0)+1}));
 const change=(id:string,d:number)=>setCart(c=>{const n=Math.max(0,(c[id]||0)+d);const x={...c};if(n)x[id]=n;else delete x[id];return x});
 const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
 return <>
  <header><button className="brand" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>URBAN<span>LINE</span></button><nav><button onClick={()=>go('catalog')}>Каталог</button><button onClick={()=>go('news')}>Новости</button><button onClick={()=>go('about')}>О нас</button></nav><button className="cartTop" onClick={()=>setCartOpen(true)}>🛒 {count} · {total.toLocaleString()} ₽</button></header>
  <section className="hero"><div><small>NEW COLLECTION · 2026</small><h1>Стиль,<br/><i>который</i><br/>работает.</h1><p>Минималистичные вещи для города. Комфорт каждый день.</p><button className="cta" onClick={()=>go('catalog')}>Смотреть каталог →</button></div><div className="visual">URBAN<br/>ESSENTIALS</div></section>
  <main id="catalog"><div className="title"><div><small>КАТАЛОГ</small><h2>Выбери своё</h2></div><input placeholder="Поиск товара..." value={q} onChange={e=>setQ(e.target.value)}/></div><div className="grid">{goods.map(x=><article key={x.id} onClick={()=>setSelected(x)}><img src={x.image} alt={x.name}/><div><small>{x.brand?.name}</small><h3>{x.name}</h3><p>{x.description}</p><footer><b>{x.price.toLocaleString()} ₽</b><button aria-label={`Добавить ${x.name}`} onClick={e=>{e.stopPropagation();add(x.id)}}>+</button></footer></div></article>)}</div>{!goods.length&&<p className="empty">Товары не найдены.</p>}</main>
  <section className="news" id="news"><small>НОВОСТИ</small><h2>Что нового</h2><div className="newsGrid">{news.length?news.map(n=><article className="newsCard" key={n.id}><small>{new Date(n.createdAt).toLocaleDateString('ru-RU')}</small><h3>{n.title}</h3><p>{n.text}</p></article>):<p>Новости скоро появятся.</p>}</div></section>
  <section className="about" id="about"><small>УЧЕБНЫЙ ПРОЕКТ</small><h2>Самописный интернет-магазин</h2><p>Next.js · TypeScript · Node.js · PostgreSQL · Redis · Docker</p></section>
  <footer className="students">Альхалид Ракан — РИ-240910　|　Абу Матер Хуссейн Джамиль Хуссейн — РИ-240943</footer>
  {selected&&<div className="overlay" onClick={()=>setSelected(null)}><div className="modal productModal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)}>×</button><img src={selected.image} alt={selected.name}/><div><small>{selected.brand?.name} · {selected.category?.name}</small><h2>{selected.name}</h2><p>{selected.description}</p>{selected.sizes&&<p><b>Размеры:</b> {selected.sizes}</p>}<p><b>В наличии:</b> {selected.stock} шт.</p><div className="buy"><strong>{selected.price.toLocaleString()} ₽</strong><button onClick={()=>add(selected.id)}>Добавить в корзину</button></div></div></div></div>}
  {cartOpen&&<div className="overlay" onClick={()=>setCartOpen(false)}><div className="modal cartModal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setCartOpen(false)}>×</button><h2>Корзина</h2>{count===0?<p>Корзина пуста.</p>:<>{allGoods.filter(x=>cart[x.id]).map(x=><div className="cartRow" key={x.id}><div><b>{x.name}</b><small>{x.price.toLocaleString()} ₽</small></div><div className="qty"><button onClick={()=>change(x.id,-1)}>−</button><span>{cart[x.id]}</span><button onClick={()=>change(x.id,1)}>+</button></div></div>)}<div className="cartTotal"><b>Итого</b><strong>{total.toLocaleString()} ₽</strong></div><button className="checkout" onClick={()=>alert('Заказ оформлен (демо)')}>Оформить заказ</button></>}</div></div>}
 </>;
}
