import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList.js";
import { query } from "express";

it("renders without crashing", function () {
    render(<TodoList/>);
})

it("matches snapshot", function () {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
    
})
it("it should add new item", function () {
    const {queryByText, getByLabelText} = render(<TodoList/>);
    const input = getByLabelText('todo');
    const btn = getByText('Add Todo');
    expect(queryByText('todo: wash car')).not.toBeInTheDocument();
    // fireEvent.change(input, {target: {value: 'wash car'}});
    // fireEvent.click(btn);
    // expect(queryByText('todo: wash car')).toBeInTheDocument();
    
    
})

