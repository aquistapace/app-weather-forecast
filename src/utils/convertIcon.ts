import clear_sky from "../assets/clear_sky.png";
import shower_rain from "../assets/shower_rain.png";
import rain from "../assets/rain.png";
import few_clouds from "../assets/few_clouds.png";
import scattered_clouds from "../assets/scattered_clouds.png";
import broken_clouds from "../assets/broken_clouds.png";
import thunderstorm from "../assets/thunderstorm.png";
import snow from "../assets/snow.png";

const images: { [name: string]: string } = {
  "01d": clear_sky,
  "01n": clear_sky,
  "02d": few_clouds,
  "02n": few_clouds,
  "04n": broken_clouds,
  "03d": scattered_clouds,
  "03n": scattered_clouds,
  "04d": broken_clouds,
  "09d": shower_rain,
  "09n": shower_rain,
  "10d": rain,
  "10n": rain,
  "11d": thunderstorm,
  "13d": snow,
};

export function convertIcon(icon: string) {
  return images[icon];
}
