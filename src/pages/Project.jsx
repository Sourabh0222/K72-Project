import { useGSAP } from '@gsap/react'
import ProjectCard from '../component/project/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
  }, {
    image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
    image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
  }, {
    image1: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
    image2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 '>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
      <div className="w-full h-full bg-black text-white py-10 px-6 flex flex-col items-center gap-50">
{/* Social Buttons */}
<div className="flex  justify-between items-center w-full  flex-wrap mb-20 ">
{['FB', 'IG', 'IN', 'BE'].map((item) => (
<div
key={item}
className="border border-white rounded-full px-10 text-9xl font-semibold h-32 "
>
{item}
</div>
))}


{/* Contact Button */}
<div className="border border-white rounded-full px-7  text-9xl font-semibold  flex items-center gap-2">
CONTACT  <svg
      width="90"
      height="90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4FF00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-6.5-4.35-9.33-8.38C-1.29 6.55 3.02 1 7.5 3.5c1.74 1 2.5 2.5 4.5 2.5s2.76-1.5 4.5-2.5C21 1 25.29 6.55 21.33 12.62 18.5 16.65 12 21 12 21z" />
    </svg>
</div>
</div>


{/* Bottom Footer Row */}
<div className="w-full flex flex-wrap justify-between items-center  font-semibold opacity-80 mt-30">
<div className="flex items-center gap-2 text-3xl">
<span>🌐</span> MONTREAL_05:00:09
</div>


<div className="flex flex-wrap gap-9 justify-center  text-2xl ">
<span>POLITIQUE DE CONFIDENTIALITÉ</span>
<span>AVIS DE CONFIDENTIALITÉ</span>
<span>RAPPORT ÉTHIQUE</span>
<span>OPTIONS DE CONSENTEMENT</span>
</div>


<div className="text-3xl">
RETOUR EN HAUT
</div>
</div>
</div>
      </div>
    

  )
}

export default Projects