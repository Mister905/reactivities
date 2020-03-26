import React from "react";
import * as Yup from "yup";
import IActivity from "../../data/activity/IActivity";
import { v4 as uuid } from "uuid";
import Datepicker from "../datepicker/Datepicker";
import {
  create_activity,
  clear_current_activity
} from "../../actions/activity/ActivityActions";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";
import moment from "moment";
import { withRouter, RouteComponentProps } from "react-router";
import * as M from "materialize-css";

interface FormValues {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  city: string;
  venue: string;
}

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

const CreateActivity: React.FC<IProps> = props => {
  const dispatch = useDispatch();

  const activity = useSelector((state: IAppState) => state.activity);

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, undefined);
  });

  const ActivitySchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    // category: Yup.string().required("Category is required"),
    date: Yup.string().required("Date is required"),
    city: Yup.string().required("City is required"),
    venue: Yup.string().required("Venue is required")
  });

  let initial_values: FormValues;

  initial_values = {
    id: "",
    title: "",
    description: "",
    category: "drinks",
    date: moment().format(),
    city: "",
    venue: ""
  };

  return (
    <div>
      <Formik
        initialValues={initial_values}
        validationSchema={ActivitySchema}
        enableReinitialize={true}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={values => {
          const { title, description, category, date, city, venue } = values;
          console.log("test");

          const new_activity: IActivity = {
            id: uuid(),
            title,
            description,
            category,
            date: moment(date).format(),
            city,
            venue
          };

          console.log(new_activity);
          // dispatch(create_activity(new_activity));
          // dispatch(clear_current_activity());
          // props.history.push(`/activities/${new_activity.id}`);
        }}
        render={formikBag => {
          const { errors, setFieldValue } = formikBag;
          return (
            <div className="container">
              <Form>
                <div className="row">
                  <div className="col m12 center-align">
                    <h1>Create Activity</h1>
                  </div>
                </div>
                <div className="row mt-25">
                  <div className="input-field custom-input-field col m6 offset-m3">
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className={errors.title ? "invalid" : ""}
                    />
                    <label htmlFor="title" className="active">
                      Title
                    </label>
                    {errors.title && (
                      <span
                        className="helper-text"
                        data-error={errors.title}
                      ></span>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="input-field custom-input-field col m6 offset-m3">
                    <Field
                      component="textarea"
                      id="description"
                      name="description"
                      className={
                        errors.description
                          ? "materialize-textarea invalid"
                          : "materialize-textarea"
                      }
                    />
                    <label htmlFor="description" className="active">
                      Description
                    </label>
                    {errors.description && (
                      <span
                        className="helper-text"
                        data-error={errors.description}
                      ></span>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="input-field custom-input-field col m6 offset-m3">
                    <div id="category_select">
                      <Field
                        value={"drinks"}
                        name="category"
                        as="select"
                        placeholder="Category"
                        onChange={(e: any) =>
                          setFieldValue("category", e.target.value)
                        }
                      >
                        <option value="drinks">Drinks</option>
                        <option value="culture">Culture</option>
                        <option value="film">Film</option>
                        <option value="food">Food</option>
                        <option value="music">Music</option>
                        <option value="travel">Travel</option>
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field custom-input-field col m6 offset-m3">
                    <Field
                      name="date"
                      className={errors.date ? "invalid" : ""}
                      component={Datepicker}
                    />

                    <label htmlFor="date" className="active">
                      Date
                    </label>
                    {errors.date && (
                      <span
                        className="helper-text"
                        data-error={errors.date}
                      ></span>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="input-field custom-input-field col m6 offset-m3">
                    <Field
                      type="text"
                      id="city"
                      name="city"
                      className={errors.city ? "invalid" : ""}
                    />
                    <label htmlFor="city" className="active">
                      City
                    </label>
                    {errors.city && (
                      <span
                        className="helper-text"
                        data-error={errors.city}
                      ></span>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="input-field custom-input-field col m6 offset-m3">
                    <Field
                      type="text"
                      id="venue"
                      name="venue"
                      className={errors.venue ? "invalid" : ""}
                    />
                    <label htmlFor="venue" className="active">
                      Venue
                    </label>
                    {errors.venue && (
                      <span
                        className="helper-text"
                        data-error={errors.venue}
                      ></span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col m6 offset-m3">
                    <div className="row">
                      <div className="col m6 offset-m6">
                        <div className="row">
                          <div className="col m6">
                            <button
                              onClick={e => {
                                e.preventDefault();
                                props.history.push("/activities");
                              }}
                              className="btn btn-custom right"
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col m6">
                            <button
                              className="btn btn-custom right"
                              type="submit"
                            >
                              {!activity.selected_activity
                                ? "Create"
                                : "Update"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default withRouter(CreateActivity);
