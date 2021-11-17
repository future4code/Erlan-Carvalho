import React from "react";
import { HeadersFather, TheHeader, StyledBodyTitle, StyledTableSection, StyledChartSection, InfoIntroduction, BodyBox } from "../src/styles";
import { PieChart } from "react-minimal-pie-chart";

function App() {
  return (
    <div >
      <HeadersFather>
        <TheHeader>
          <input placeholder="first name"></input>
          <input placeholder="last name"></input>
          <input placeholder="participation"></input>
          <button>SEND</button>
        </TheHeader>
      </HeadersFather>
      <div>

        <InfoIntroduction>
          <StyledBodyTitle>Data</StyledBodyTitle>
          <p>Information of employees participation in business meetings</p>
        </InfoIntroduction>
        <BodyBox>
          <StyledTableSection>
            <table>
              <th>first name<tr><td>Maria</td></tr> <tr><td>José</td></tr></th>

              <th>last name <tr><td>Dos Santos</td></tr> <tr><td>Freire</td></tr></th>

              <th>participation <tr><td>50%</td></tr> <tr><td> 50%</td></tr></th>
            </table>
          </StyledTableSection>

          <StyledChartSection>
            <PieChart
              data={
                [
                  { title: 'Maria', value: 50, color: '#E38627' },
                  { title: 'José', value: 50, color: '#C13C37' },
                ]}
              startAngle={90}
              animate={true}
              viewBoxSize={[200, 200]}
              lineWidth={50}
            />;
          </StyledChartSection>
        </BodyBox>
      </div>
    </div>
  );
}

export default App;
