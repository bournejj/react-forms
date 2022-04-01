import React from "react";
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList.js";
import { query } from "express";

it("renders without crashing", function () {
    render(<BoxList/>);
})

it("matches snapshot", function () {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
    
})
it("it should add new item", function () {
    const {queryByText, getByLabelText} = render(<BoxList/>);
    const input = getByLabelText('colour');
    const btn = getByText('Add Box');
    expect(queryByText('colour: red')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: 'red'}});
    fireEvent.click(btn);
    expect(queryByText('todo: red')).toBeInTheDocument();
    
    
})
