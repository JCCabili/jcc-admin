import Links from './links'
import {SiTailwindcss} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"

export default function Footer(props) {
    const {size} = props;
  return (
    <div>
        
        <div className="flex justify-center pt-10">
            <div className="mt-5 sm:mt-8 content-center w-3/4 md:w-2/4 lg:w-1/4">
              <Links size={24}/>
            </div>
        </div>

        <div className="flex  items-center justify-center pt-8 text-sm flex-col align gap-2">
            <p>Designed & Build by </p>
            <p><b>Jhon Christopher Cabili</b></p>
            <p className="text-black">Powered By</p>
            <div className="flex justify-center gap-4 pt-4">
              <SiTailwindcss size={24}/>
              <TbBrandNextjs size={24}/>
            </div>
        </div>
       
    </div>
    
    
    
  )
}
