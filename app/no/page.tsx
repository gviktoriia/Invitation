import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className='cat'>
            <iframe src="https://giphy.com/embed/T2PgrPicbnmpXjIZod" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
        <div className='content-style'>
            <h1 className='text-question'>Богати</h1>
            <h1 className='text-question'>Які ніт?</h1>
        </div>
    </main>
  )
}

export default page