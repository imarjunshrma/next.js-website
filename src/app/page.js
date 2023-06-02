
// import styles from './page.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="homepage">
      <div className="section">
        <section className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Responsive left-aligned hero with image</h1>
              <p className='my-4'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              <div className='my-4'>
                <button className='btn btn-primary mx-2 my-4'>Primary</button>
                <button className='btn btn-outline-secondary mx-2 my-4'>Default</button>
              </div>

            </div>
            <div className="col-md-6">
              <Image src="/bootstrap-themes.png"
                width="522"
                height="372"
                alt='Hero Image'
                quality={100}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
