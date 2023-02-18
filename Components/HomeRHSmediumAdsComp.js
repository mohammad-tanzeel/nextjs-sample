import React from 'react'

const AD_UNIT_PATH = '/13276288/jagran/desktop/Prime/Home/Medium_300x250';

class HomeRHSmediumAdsComp extends React.Component {
    componentDidMount() {
        googletag.cmd.push(function() {
            googletag.defineSlot(AD_UNIT_PATH, [[300, 250], [300, 200], [250, 250]], 'rhs_medium_300x250').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
        googletag.cmd.push(function() { googletag.display('rhs_medium_300x250'); });
    }
 
    render() {
        return (
            <div id="HomeRHSmediumAdsComp" className='mb20 ads300'>
		<div id="rhs_medium_300x250" style={{ width: '300px', height: '250px' }} />
            </div>
        );
    }
}

export default HomeRHSmediumAdsComp; 