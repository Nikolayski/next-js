import Picture from "../../collections/Picture/Picture";
import { PicturesContainer } from "./elements";


const Pictures = props => {
    return(
        <PicturesContainer>
            <Picture src="/static/images-desktop/image-gallery-milkbottles.jpg" />
            <Picture src="/static/images-desktop/image-gallery-orange.jpg" />
            <Picture src="/static/images-desktop/image-gallery-cone.jpg" />
            <Picture src="/static/images-desktop/image-gallery-sugarcubes.jpg" />
        </PicturesContainer>
    )
}

export default Pictures;