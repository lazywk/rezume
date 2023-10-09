import React from 'react'

export default function PortfolioCard({ item }) {
    return (
        <div className='portfolio-item portfolio-card'>
            <div className='portfolio-card-img'>
                <a target='blank' href={item.url}>
                    <img src={item.img} className='' alt={item.name} />
                </a>
                <div>
                    <p className='portfolio-card-task-title portfolio-card-lang-title'>Languages</p>
                    <div className='portfolio-card-task-list portfolio-card-lang-list'>
                        {
                            item.langs.map(el => <p className='portfolio-card-task-item portfolio-card-lang-item' key={el}>{el},</p>)
                        }
                    </div>
                </div>
            </div>
            <div className='portfolio-content'>
                <div className='portfolio-card-header'>
                    <h3 className='portfolio-card-title'>
                        {item.name}</h3>
                    <a target='blank' className='portfolio-card-url' href={item.url}>Link</a>
                </div>
                <p className='portfolio-desc'>{item.description}</p>
                <p className='portfolio-card-task-title'>Completed tasks</p>
                <div className='portfolio-card-task-list'>
                    {
                        item.tasks.map(el => <p className='portfolio-card-task-item' key={el}>{el}</p>)
                    }
                </div>
            </div>
        </div>
    )
}
