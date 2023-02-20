// import sanitizeHtml from 'sanitize-html';
export async function getStaticProps() {
    // const res = await fetch("http://34.93.230.151:8081/jplus/articlebyid/22760562")
    const res = await fetch("https://jagranampapi132443254.jagran.com/jplus/amp/articlebyid/22808652")
    const data = await res.json()
    //console.log(data);
    return {
        props: { data } // will be passed to the page component as props
    }
}

// function createMarkup() {
//     return {
//        __html: 'p · Second'    };
//  }; 

{/* <div dangerouslySetInnerHTML={createMarkup()} 
/>  */}

function Apifetchdata_1(props) {


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
                    {/* <div id="__next" dangerouslySetInnerHTML={{ __html: data.body }} />   */}
                    <div id="__next" dangerouslySetInnerHTML={{ __html: data.ampBody }} />
                   
                    
        </div>
        </>
    )
}
export default Apifetchdata_1 
