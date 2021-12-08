import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import widhi from "../country.json";
import { Typeahead } from "react-bootstrap-typeahead";
import { Form } from "react-bootstrap";

const Cities = () => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);

  return (
    <div className="container">
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={widhi.states}
          selected={singleSelections}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={setMultiSelections}
          options={widhi.city}
          selected={multiSelections}
        />
      </Form.Group>
    </div>
  );
};

export default Cities;
