import Hero from "./ui/Hero";
import Pricing from "./ui/Pricing";
import Slider from "./ui/Slider";
import { SliderData } from "./ui/SliderData";

export default function Home() {
  return (
    <div>
      <Hero heading='Pixel Photography' message='I Capture moments in nature and keep them alive'/>
      <Slider slides={SliderData}/>
      <Pricing/>
    </div>
  );
}
