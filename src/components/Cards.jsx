import React from 'react'

function Cards(props) {

  return (

    <div className='w-[70%] h-[100%] mx-auto flex flex-col justify-center items-center 
    mt-4 mb-4'>
      {props.data.map((item) => (
        <div key={item.show.id} className='mt-4 mb-4 pb-2'>
            {/* <img src={item.show.image.medium} alt="" /> */}
          <p className='text-center text-xl font-semibold mb-4 '>Show Name: {item.show.name}</p>
          <p>Score: {item.score}</p>
          <p>Show Status: {item.show.status}</p>
          <p>Languages: {item.show.language}</p>
          <p>averageRuntime : {item.show.averageRuntime}</p>
          <div>
            start {item.show.premiered}
            ended {item.show.ended}
            Rating {item.show.rating.average}
          </div>
          <p className='font-semibold'>Summary : <span className='text-sm text-gray-500'>{item.show.summary}</span></p>
          <div className='text-center'>
          <button className='bg-gray-400 py-1 px-2 rounded-lg mt-4 mb-6 '>
          <a href={item.show.officialSite} target='_blank'>Read More</a>
          </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Cards
