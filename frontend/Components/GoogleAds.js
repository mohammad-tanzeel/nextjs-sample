import { useEffect } from "react"

export default function GoogleAds(...props) {
    const { currentPath } = props;
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }, [currentPath])

    return(
        <div key={currentPath}>
        { /*START horizonalAds Google Adsense */ }
            <ins className="adsbygoogle horizonalAds"
                style={{display: 'block'}}
                data-ad-client="ca-pub-xxxxxxxxxxxxxxxxx"
                data-ad-slot="xxxxxxxxxx"
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
        { /* END horizonalAds Google Adsense */ }

        </div>
    )
}