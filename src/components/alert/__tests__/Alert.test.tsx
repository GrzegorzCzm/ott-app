import React from "react";
import * as redux from "react-redux";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Alert from "../Alert";

describe("Alert", () => {
  const spySelector = jest.spyOn(redux, "useSelector");
  const spyDispatch = jest.spyOn(redux, "useDispatch");
  const mockDispatch = jest.fn();

  spyDispatch.mockReturnValue(mockDispatch);

  it("renders correctly when isAlert is false", () => {
    spySelector.mockReturnValue({
      isAlert: false,
      alertText: "",
    });

    const wrapper = shallow(<Alert />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders correctly when text is set and isAlert is true", () => {
    const SOME_TEXT = "some text";
    spySelector.mockReturnValue({
      isAlert: true,
      alertText: SOME_TEXT,
    });

    const wrapper = shallow(<Alert />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
