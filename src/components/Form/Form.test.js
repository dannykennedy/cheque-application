import renderer from "react-test-renderer";
import React from "react";
import { Form } from "./Form";

test("Tag snapshot test", () => {
    const component = renderer.create(<Form />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
