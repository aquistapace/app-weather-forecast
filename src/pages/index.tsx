import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as WindIcon } from "../assets/wind.svg";
import { ReactComponent as SunriseIcon } from "../assets/sunrise.svg";
import { ReactComponent as SunsetIcon } from "../assets/sunset.svg";
// import { capitalize } from "../utils/capitalize";
import Header from "../components/Header";
import TitleBox from "../components/TitleBox";
import { ReactComponent as HumidityIcon } from "../assets/humidity.svg";
import { convertIcon } from "../utils/convertIcon";
import { calculateUVIndex } from "../utils/calculeUVI";
import { removeDot, removeBar } from "../utils/removeEspecialCaracteres";
import { ReactComponent as UvIcon } from "../assets/uv.svg";
import {
  displayTimestamp,
  whatIsDate,
  whatIsHour,
} from "../utils/displayTimestamp";
import CardHorizontal from "../components/CardHorizontal";
import api from "../services/api";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSearch,
} from "react-icons/ai";
import CardVertical from "../components/CardVertical";
import {
  Container,
  ContainerCardsVertical,
  SectionPrimary,
  SectionContent,
  SectionSecondary,
  CardSunriseSunset,
} from "./styles";

interface Props {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number | undefined;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  };
  daily: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      moonrise: number;
      moonset: number;
      moon_phase: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      pressure: number;
      humidity: number;
      dew_point: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: number;
      pop: number;
      uvi: number;
    }
  ];
}

const DashboardWeatherForecast: React.FC = () => {
  const [data, setData] = useState<Props | undefined>();

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get<Props>(
        "/onecall?lat=-23.5489&lon=-46.6388&l&units=metric&exclude=hourly,minutely,alerts&appid=889ccf4cff9e104cef05b745c7777936"
      );
      const wheater = response.data;
      setData(wheater);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Header titlePage="Weather Forecast">
        <form action="">
          <label htmlFor="search">Location</label>
          <input type="text" name="search" id="search" />
          <button type="submit" aria-label="search">
            <AiOutlineSearch size={24} />
          </button>
        </form>
      </Header>
      <SectionPrimary>
        <div>
          <TitleBox>Now, {whatIsHour(data?.current.dt as any)}</TitleBox>
          <SectionContent>
            <p>{data?.timezone && removeBar(data?.timezone)}</p>
            <span>{data?.current.temp} °</span>
            <div>
              <img
                src={convertIcon(data?.current.weather[0].icon as any)}
                style={{ width: "40px" }}
                alt={data?.current.weather[0].description}
              />
              <p>{data?.current.weather[0].description}</p>
            </div>
          </SectionContent>
        </div>

        <div>
          <TitleBox>Today, {whatIsDate(data?.current.dt as any)}</TitleBox>
          <CardSunriseSunset>
            <p>Sunrise & Sunset</p>
            <div>
              <SunriseIcon style={{ width: "40px", height: "40px" }} />
              <span>{whatIsHour(data?.current.sunrise as any)} AM</span>

              <SunsetIcon style={{ width: "40px", height: "40px" }} />
              <span>{whatIsHour(data?.current.sunset as any)} PM</span>
            </div>
          </CardSunriseSunset>

          <CardHorizontal
            icon={<WindIcon style={{ width: "30px", height: "30px" }} />}
            description="Wind Speed"
            value={
              <>
                <span>{data?.current.wind_speed} Km/h</span>
              </>
            }
          ></CardHorizontal>
          <CardHorizontal
            icon={<HumidityIcon style={{ width: "30px", height: "30px" }} />}
            description="Humidity"
            value={
              <>
                <span>{data?.current.humidity} %</span>
              </>
            }
          ></CardHorizontal>
          <CardHorizontal
            icon={<UvIcon style={{ width: "40px", height: "40px" }} />}
            description="UV Index"
            value={calculateUVIndex(data?.current.uvi as any)}
          ></CardHorizontal>
        </div>
      </SectionPrimary>

      <SectionSecondary>
        <TitleBox>Week</TitleBox>
        <ContainerCardsVertical>
          {data?.daily.slice(0, 7).map((item: any) => (
            <CardVertical
              title={displayTimestamp(item?.dt)}
              icon={
                <img
                  src={convertIcon(item.weather[0].icon)}
                  style={{ width: "40px" }}
                  alt={item.weather[0].description}
                />
              }
              description={
                <div className="card-footer">
                  <AiOutlineArrowDown />
                  <span>
                    {item?.temp.min && removeDot(item?.temp.min.toString())}°
                  </span>
                  |<AiOutlineArrowUp />
                  <span>
                    {item?.temp.max && removeDot(item?.temp.max.toString())}°
                  </span>
                </div>
              }
            ></CardVertical>
          ))}
        </ContainerCardsVertical>
      </SectionSecondary>
    </Container>
  );
};

export default DashboardWeatherForecast;
