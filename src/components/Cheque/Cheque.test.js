import renderer from "react-test-renderer";
import React from "react";
import { Cheque } from "./Cheque";

test("Tag snapshot test", () => {
    const component = renderer.create(
        <Cheque
            drawer={"John Jones"}
            amount={45}
            payee={"Dan Kennedy"}
            date={new Date()}
            testing={true}
        />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
