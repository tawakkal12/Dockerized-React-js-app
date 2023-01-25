import React from "react"
import "./Features.css"
import data from "./Featuresapi"
import Card from "./Cards"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>Features</h1>
            <h2>What I DO</h2>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features