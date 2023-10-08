import PortfolioCard from 'components/elements/portfolio-card'
import React from 'react'

export default function PortfolioPage() {

  const portfolioData = [
    {
      id: 1,
      name: 'Boomerang - GPS Tracking System',
      img: 'https://placehold.co/400x400',
      url: 'https://gps.uzal.uz',
      description: "A private website that controls the direction and movements of the cars, as well as the driver's duties, which are controlled by administrators.",
      tasks: [
        'Authentication',
        'Working with 3 different roles (superadmin, admin, client)',
        'Work with multi-location directions and routes using Google Map and Yandex Map',
        'Strong Integrate with API',
        'Socket.io',
        'Responsive design'
      ],
      langs: [
        'JavaScript',
        'ReactJs',
        'TailwindCSS'
      ]
    },
    {
      id: 2,
      name: 'SOFF - ECommerce',
      img: 'https://placehold.co/400x400',
      url: 'https://soff.uz',
      description: 'Providing a secure trading and secure payment system between the seller and the buyer',
      tasks: [
        'Partial participation in the project',
        'Working with 3 different roles (admin, seller, customer)',
        'Reviewing and fixing other people’s code',
        'Explanation of errors and troubleshooting methods',
        'Socket.io',
        'Responsive design'
      ],
      langs: [
        'NextJs',
        'Ant Design',
      ]
    }
  ]

  return (
    <div className='portfolio'>
      <h2 className='portfolio-title'>My Projects</h2>
      <div className='portfolio-list'>
        {
          portfolioData.map(el => {
            return <PortfolioCard item={el} key={el.id} />
          })
        }
      </div>
    </div>
  )
}
