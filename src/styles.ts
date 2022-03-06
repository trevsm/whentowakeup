import styled from "styled-components";

export const Times = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const TimeItem = styled.div`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 7px;
  background: #7878781f;
  border-radius: 5px;
`;

export const Time = styled.input<{ theme: string }>`
  background: white;
  text-align: center;
  color: ${(props) => props.theme};
  border: none;
  outline: none;
  font-size: 25px;
  padding: 5px;
  border-radius: 5px;
`;

export const Color = styled.input`
  position: fixed;
  top: 0;
  padding: 0;
  appearance: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: 0;
  width: 45px;
  height: 45px;
  opacity: 0;
`;

export const DoseNum = styled.span<{ theme: string }>`
  display: inline-block;
  font-size: 20px;
  background: ${(props) => props.theme};
  padding: 5px;
  width: 25px;
  text-align: center;
  border-radius: 5px;
  font-family: monospace;
`;

export const RestHours = styled.div`
  font-size: 15px;
  opacity: 0.7;
  display: flex;
  align-items: center;
`;

export const Edge = styled.span`
  opacity: 0.5;
  font-size: 17px;
  margin: 0 10px;
`;

export const KaFi = styled.a<{ theme: string }>`
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 40px;
  background: ${(props) => props.theme};
  text-align: center;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  box-shadow: 3px 3px 9px #00000070;
`;
