import React, { Component, createRef } from "react";
import * as M from "materialize-css";
import moment from "moment";

interface IProps {
  form: {
    setFieldValue: (field: string, value: any) => void;
  };
  field: {
    name: string;
    value: string
  };
}

class Datepicker extends React.Component<IProps, {}> {
  componentDidMount() {
    const datePickerOptions: Partial<M.DatepickerOptions> = {
      autoClose: true,
      defaultDate: moment(this.props.field.value).toDate(),
      setDefaultDate: true,
      yearRange: [1940, 2025],
      onSelect: (date: Date) => {
        this.props.form.setFieldValue("date", date);
      }
    };

    const elem = document.querySelector("#date-picker")!;

    M.Datepicker.init(elem, datePickerOptions);
  }

  render() {
    return (
      <div id="datepicker-wrapper">
        <input id="date-picker" type="text" className="datepicker" />
      </div>
    );
  }
}

export default Datepicker;
