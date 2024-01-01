import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='cat'>
        <iframe src="https://giphy.com/embed/vEcTsPwp2ilQz5bGQ8" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className='content-style'>
        <h1 className='text-question'>Йдеме пити сього тижня?</h1>
        <Link href="/no"><button className='btn-style'>Ніт</button></Link>
        <Link href="/yes"><button className='btn-style yes'>Айно</button></Link>
      </div>
    </main>
  )
}
