import { useEffect, useMemo, useState } from "react";
import { EA, addHours, ampm, pad } from "./tools";
import Slider from "react-input-slider";
import { useLocalStorage } from "usehooks-ts";
import Coffee from "./images/coffee";
import Paint from "./images/paint";
import Moon from "./images/moon";
import Contact from "./Contact";
import {
  RestHours,
  TimeItem,
  Color,
  Time,
  DoseNum,
  Edge,
  Times,
  KaFi,
} from "./styles";

function App() {
  const [date, setDate] = useState(new Date());
  const [timeInt, setTimeInt] = useState(null);
  const [doseOffDelay, setDoseOffDelay] = useLocalStorage("doseOffDelay", 15);
  const [theme, setTheme] = useLocalStorage("theme", "#5e72e4");

  const setNextDate = () => {
    const newDate = new Date();
    newDate.setMinutes(newDate.getMinutes() - (newDate.getMinutes() % 5));
    setDate(newDate);
  };

  useEffect(() => {
    setNextDate();
    setTimeInt(
      setInterval(() => {
        setNextDate();
      }, 5000)
    );
  }, []);

  const handleCustomTime = (e) => {
    const value = e.target.value.split(":");
    if (value[0] && value[1]) {
      clearInterval(timeInt);
      const newDate = new Date();
      newDate.setHours(value[0]);
      newDate.setMinutes(value[1]);
      setDate(newDate);
    }
  };

  const times = useMemo(() => {
    return EA(5).map((_, i) => {
      const hours = (i + 2) * 1.5;
      const nextDate = addHours(date, hours + doseOffDelay / 60);
      const hh = nextDate.getHours(),
        mm = nextDate.getMinutes();
      return (
        <TimeItem
          key={i}
          style={{ border: i >= 3 ? "5px solid " + theme : "" }}
        >
          <div>
            {ampm(hh).hours}:{pad(mm, 2)} {ampm(hh).suffix}
          </div>
          <RestHours>
            <span>{hours} hours</span>
          </RestHours>
        </TimeItem>
      );
    });
  }, [date, doseOffDelay, theme]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Goodnight <Moon theme={theme} />
      </h1>
      <Color
        type="color"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <Paint theme={theme} />
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p>If you go to bed at:</p>
        <Time
          type="time"
          value={`${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}`}
          onChange={handleCustomTime}
        />
      </div>
      <div className="doseOffDelay" style={{ textAlign: "center" }}>
        <p style={{ marginBottom: 0 }}>
          And fall asleep in <DoseNum theme={theme}>{doseOffDelay}</DoseNum>{" "}
          minutes,
        </p>
        <p style={{ opacity: ".5", marginTop: 0, fontSize: "17px" }}>
          (Most people take about 15)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <Edge>1m</Edge>
          <Slider
            axis="x"
            x={doseOffDelay}
            xmin={1}
            xmax={30}
            styles={{ active: { backgroundColor: theme } }}
            onChange={({ x }) => setDoseOffDelay(x)}
          />
          <Edge>30m</Edge>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        Wake up at one of <br />
        the following times:
      </p>
      <Times>{times}</Times>
      <KaFi
        theme={theme}
        href="https://ko-fi.com/trevsm"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <Coffee />
      </KaFi>
      <Contact />
      <br />
      <br />
    </>
  );
}

export default App;
