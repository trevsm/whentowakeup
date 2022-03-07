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
  Emote,
} from "./styles";
import axios from "axios";

function App() {
  const [date, setDate] = useState(new Date());
  const [timeInt, setTimeInt] = useState(null);
  const [doseOffDelay, setDoseOffDelay] = useLocalStorage("doseOffDelay", 15);
  const [theme, setTheme] = useLocalStorage("theme", "#5e72e4");
  const [voted, setVoted] = useLocalStorage("voted", false);
  const [hidden, setHidden] = useLocalStorage("hidden", false);
  const [loading, setLoading] = useState(false);

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

  const happy = (emote: boolean) => {
    setLoading(true);
    void axios
      .get("https://eoicumpkrxpzfrr.m.pipedream.net?happy=" + emote)
      .then(() => setVoted(true))
      .catch(() => alert("Error submitting..."))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <a
        href="https://trevsm.github.io/whentowakeup-v1/"
        style={{ color: "white" }}
      >
        <p
          style={{
            opacity: ".2",
            textAlign: "center",
            width: "100%",
            fontSize: "15px",
          }}
        >
          Switch to old version?
        </p>
      </a>
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
      {loading && (
        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            margin: 0,
            position: "absolute",
            left: 0,
            right: 0,
          }}
        >
          loading...
        </div>
      )}
      {!hidden &&
        (!voted ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              marginBottom: 0,
              marginTop: "30px",
            }}
          >
            Enjoying the update? <Emote onClick={() => happy(true)}>😄</Emote>
            <Emote onClick={() => happy(false)}>😞</Emote>
          </p>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              marginBottom: 0,
              marginTop: "30px",
            }}
          >
            Thanks!{" "}
            <Emote
              onClick={() => setHidden(true)}
              style={{ color: "white", fontSize: "15px", marginLeft: "10px" }}
            >
              {" "}
              (hide){" "}
            </Emote>
          </p>
        ))}
      <Contact />
      <br />
      <br />
    </>
  );
}

export default App;
