import React, { useEffect } from "react";
import * as Yup from "yup";
import IActivity from "../../data/activity/IActivity";
import { v4 as uuid } from "uuid";
import Datepicker from "../datepicker/Datepicker";
import {
  create_activity,
  update_activity,
  set_create_mode,
  set_edit_mode,
  set_current_activity,
  clear_current_activity
} from "../../actions/activity/ActivityActions";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";
import moment from "moment";
import { withRouter, RouteComponentProps } from "react-router";

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

const ActivityForm: React.FC<IProps> = props => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(set_current_activity(props.match.params.id));
    } else {
      dispatch(clear_current_activity());
    }
  }, [props.match.params.id]);

  const activity = useSelector((state: IAppState) => state.activity);

  const ActivitySchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.string().required("Date is required"),
    city: Yup.string().required("City is required"),
    venue: Yup.string().required("Venue is required")
  });

  let initial_values: FormValues;

  if (activity.selected_activity) {
    const {
      selected_activity: { id, title, description, category, date, city, venue }
    } = activity;
    initial_values = {
      id: id || "",
      title: title || "",
      description: description || "",
      category: category || "",
      date: moment(date).format(),
      city: city || "",
      venue: venue || ""
    };
  } else {
    console.log("test");
    initial_values = {
      id: "",
      title: "",
      description: "",
      category: "",
      date: moment().format(),
      city: "",
      venue: ""
    };
  }

  return (
    <div>
      <Formik
        initialValues={initial_values}
        validationSchema={ActivitySchema}
        enableReinitialize={true}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={values => {
          const { id, title, description, category, city, venue } = values;
          if (activity.create_mode) {
            const new_activity: IActivity = {
              id: uuid(),
              title,
              description,
              category,
              date: moment().format(),
              city,
              venue
            };
            dispatch(create_activity(new_activity));
            dispatch(set_current_activity(new_activity.id));
            dispatch(set_create_mode(false));
          } else {
            const updated_activity: IActivity = {
              id,
              title,
              description,
              category,
              date: moment().format(),
              city,
              venue
            };

            dispatch(update_activity(updated_activity));
            dispatch(set_current_activity(updated_activity.id));
            dispatch(set_edit_mode(false));
          }
        }}
        render={formikBag => {
          const { errors } = formikBag;
          return (
            <Form>
              <div className="row">
                <div className="input-field col m12">
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
                <div className="input-field col m12">
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
                <div className="input-field col m12">
                  <Field
                    type="text"
                    id="category"
                    name="category"
                    className={errors.category ? "invalid" : ""}
                  />
                  <label htmlFor="category" className="active">
                    Category
                  </label>
                  {errors.category && (
                    <span
                      className="helper-text"
                      data-error={errors.category}
                    ></span>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="input-field col m12">
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
                <div className="input-field col m12">
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
                <div className="input-field col m12">
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
                <div className="col m6 offset-m6">
                  <div className="row">
                    <div className="col m6">
                      <button
                        onClick={e => {
                          e.preventDefault();
                          activity.create_mode
                            ? dispatch(set_create_mode(false))
                            : dispatch(set_edit_mode(false));
                        }}
                        className="btn btn-custom right"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col m6">
                      <button className="btn btn-custom right" type="submit">
                        {activity.create_mode ? "Create" : "Update"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default withRouter(ActivityForm);
