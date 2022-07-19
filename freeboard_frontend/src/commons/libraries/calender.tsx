import { Alert, Calendar } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import styled from "@emotion/styled";
import { React, useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  padding: 10px;
`;
const Box = styled.div`
  width: 300px;
  height: 100px;
  overflow: initial;
`;

export default function pickCalendar() {
  const [value, setValue] = useState(moment("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(moment("2017-01-25"));

  const onSelect = (newValue: Moment) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Moment) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box>
        <MyCalendar
          fullscreen={false}
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        />
      </Box>
      <Box>
        <Alert
          message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
        />
      </Box>
    </Wrapper>
  );
}
