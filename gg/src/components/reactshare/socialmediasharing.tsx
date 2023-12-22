import {
    FacebookShareCount,
    FacebookIcon,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    
    EmailIcon,
    EmailShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappShareButton,
  } from "react-share";

export const Thorsu:React.FC=()=>{
    return <>


                            <TwitterShareButton  url={"http://www.wiki.com"}  className="Demo__some-network__share-button">
                            <TwitterIcon size={32} round />
                            </TwitterShareButton>


                            <FacebookShareButton 
                            url={"http://www.wiki.com"}
                            
                            hashtag="#srinivas">
                            <FacebookIcon size={36}  round={true} />
                            </FacebookShareButton>


                            <LinkedinShareButton
                            url={"http://www.wiki.com"}>
                            <LinkedinIcon size={36}  round={true} />
                            </LinkedinShareButton>



                            <EmailShareButton
                            url={"http://www.wiki.com"}>
                            <EmailIcon size={36}  round={true} />
                            </EmailShareButton>



                            <ViberShareButton
                            url={"http://www.wiki.com"}>
                            <ViberIcon size={36}  round={true} />
                            </ViberShareButton>




                            <WhatsappShareButton
                            url={"http://www.wiki.com"}>
                            <WhatsappIcon size={100}  round={true} />
                            </WhatsappShareButton>
    </>
}