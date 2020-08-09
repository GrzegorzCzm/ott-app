import React from "react";
import * as redux from "react-redux";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from "../App";

describe("App", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({ userAuthenticated: false });

  it("renders correctly", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
