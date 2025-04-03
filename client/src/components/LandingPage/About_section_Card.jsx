import React from 'react'

const About_section_Card = ({btnText , details , img_url , title}) => {
  return (
    <>
      <div className={`bg-cover p-3 rounded-lg shadow-md text-center flex flex-col gap-20`}
      style={{ backgroundImage: `url(${img_url})`  }}
      >
            <button className="bg-lime-300 px-2 py-1 rounded-full text-xs font-semibold w-fit">{btnText}</button>
            <div className='flex gap-2 flex-col items-center'>
            <h3 className="mt-2 text-center font-semibold text-white text-xl">{title}</h3>
            <h3 className="mt-2 font-semibold text-white text-sm">{details}</h3>
            </div>
          </div>
    </>
  )
}

export default About_section_Card