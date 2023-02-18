import React from 'react'
export default function Apifetch_data_1(props) {
        const {data} =props
  return (
        <>                  
        <div className='innerBody'>
            <h1>Data Fatch by API</h1>                       
                    <div className='headLine'>{data.headline}</div>  
                    <div className='headLine'>{data.headline}</div>  
                    <div className='Title'>{data.webTitle}</div>
                    <div className='meta'>{data.metaTitle}</div>           
                    <div className='sumary'>{data.summary}</div>             
                    <div className='sumary'>{data.category}</div>              
                    <div className='sumary'>{data.subcategory}</div>                 
                    <div className='sumary'>{data.keywords}</div>                      
                    <div className='sumary'>{data.headline}</div>     
                    <div className='common'>{data.authorEng}</div>        
                    <div className='common'>{data.pubDate}</div>        
                    <div className='common'>{data.modDate}</div>         
                    <div className='common'>{data.channelName}</div>         
                    <div className='common'>{data.brandedContent}</div>                   
                    <div className='common'>{data.imgName}</div>                         
                    <div className='common'>{data.video}</div>                          
                    <div className='common'>{data.authorId}</div>                      
                    <div className='common'>{data.webcategoryHn}</div>               
                    <div className='common'>{data.webSubCategoryHn}</div>                                     
                    {/* <div id="__next" dangerouslySetInnerHTML={{ __html: data.body }} />  */}
                    <div id="__next" dangerouslySetInnerHTML={{ __html: data.ampBody }} /> 
                    
        </div>
        </>
  )
}
