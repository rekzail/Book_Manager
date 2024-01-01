import React from 'react'
import Card from './Card';

const data = [
    {
      id: 1,
      image: '/image/cover.png',
      title: 'Using Vanilla Extract with next-themes',
      description: 'How to apply vanilla extract themes to Next.js apps',
    },
    {
      id: 2,
      image: 'https://samuelkraft.com/_next/image?url=%2Fblog%2Fradix-ui-styling-with-css%2Fimage.png&w=1080&q=75',
      title: 'Styling Radix UI with CSS',
      description: 'Quick tip for styling Radix Primitives with plain CSS, CSS Modules, Vanilla Extract and more',
    },
    {
      id: 3,
      image: '/image/cover.png',
      title: 'Using Vanilla Extract with next-themes',
      description: 'How to apply vanilla extract themes to Next.js apps',
    },
  ];

export default function Category() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12">
                <h2 className="titulo">Libros por Categoria</h2>
                <hr className='hr'/> 
                <div className="row">
                {data.map((item) => (
              <Card key={item.id} image={item.image}  title ={item.title}/>
            ))}
             
                </div>
                
              
            </div>
           
        </div>
        
    </div>
  )
}
