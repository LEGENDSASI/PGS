import React from 'react'
import p1 from '../../assets/Partners/Stays/p1.jpg'



const Ourpartners = () => {

      const partners = [
        { logo: p1, name: "Partner 1" },    
      
      ];
    

  return (
    <div>
       <section id="partners" className="py-4  md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span style={{ color: 'hsl(var(--color-primary))' }}>Partners</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Trusted by industry leaders
          </p>
        </div>

        {/* Simple Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group  border w-fit mx-auto  flex items-center justify-center"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))',
                minHeight: '120px'
              }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-40 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  )
}

export default Ourpartners
