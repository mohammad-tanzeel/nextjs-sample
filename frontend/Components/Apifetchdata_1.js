import React from 'react'
export default function Apifetchdata_1() {
  return (
    <div className='innerBody'>
            <h1>Data Fatch by API</h1>
                    <>                    
                    <div id="__next" dangerouslySetInnerHTML={{ __html: data.body }} />
                    <div>{data.id}</div>                    
                    <div>{data.summary}</div>
                    <div>{data.headline}</div>                    
                    <div>{data.webTitle}</div>                    
                    </>
                    
        </div>
  )
}
