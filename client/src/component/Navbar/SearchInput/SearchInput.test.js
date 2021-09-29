/* External */
import React from "react";
import { render, screen } from "@testing-library/react";

/* Componente */
import  SearchInput  from "./SearchInput";


test("render", () => {
    const component = render(<SearchInput/>);
    screen.debug();
    console.log(component);
})