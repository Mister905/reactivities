import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field } from "formik";
import { IActivity } from "../../models/activity";
import { v4 as uuid } from "uuid";

interface IProps {
  activity: IActivity;
  create_mode: boolean;
  edit_mode: boolean;
  set_create_mode: (create_mode: boolean) => void;
  set_edit_mode: (edit_mode: boolean) => void;
  selected_activity: IActivity;
  set_selected_activity: (activity: IActivity | undefined) => void;
  handle_create_activity: (activity: IActivity) => void;
  handle_update_activity: (activity: IActivity) => void;
}

interface FormValues {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  city: string;
  venue: string;
}

const InnerForm = (props: IProps & FormikProps<FormValues>) => {
  const { errors, set_edit_mode, create_mode } = props;

  return (
    <div>
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
              <span className="helper-text" data-error={errors.title}></span>
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
              <span className="helper-text" data-error={errors.category}></span>
            )}
          </div>
        </div>

        <div className="row">
          <div className="input-field col m12">
            <Field
              type="text"
              id="date"
              name="date"
              className={errors.date ? "invalid" : ""}
            />
            <label htmlFor="date" className="active">
              Date
            </label>
            {errors.date && (
              <span className="helper-text" data-error={errors.date}></span>
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
              <span className="helper-text" data-error={errors.city}></span>
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
              <span className="helper-text" data-error={errors.venue}></span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m6">
            <div className="row">
              <div className="col m6">
                <button
                  onClick={() => set_edit_mode(false)}
                  className="btn btn-custom right"
                  type="submit"
                >
                  Cancel
                </button>
              </div>
              <div className="col m6">
                <button className="btn btn-custom right" type="submit">
                  {create_mode ? "Create" : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

const ActivityForm = withFormik<IProps, FormValues>({
  enableReinitialize: true,
  mapPropsToValues: props => {
    if (props.selected_activity) {
      const {
        selected_activity: {
          id,
          title,
          description,
          category,
          date,
          city,
          venue
        }
      } = props;
      return {
        id: id || "",
        title: title || "",
        description: description || "",
        category: category || "",
        date: date || "",
        city: city || "",
        venue: venue || ""
      };
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: ""
      };
    }
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.string().required("Date is required"),
    city: Yup.string().required("City is required"),
    venue: Yup.string().required("Venue is required")
  }),
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit(
    { id, title, description, category, date, city, venue }: FormValues,
    {
      props: {
        create_mode,
        set_create_mode,
        set_edit_mode,
        handle_update_activity,
        handle_create_activity,
        set_selected_activity
      }
    }
  ) {
    if (create_mode) {
      const new_activity: IActivity = {
        id: uuid(),
        title,
        description,
        category,
        date,
        city,
        venue
      };

      handle_create_activity(new_activity);
      set_selected_activity(new_activity);
      set_create_mode(false);
    } else {
      const updated_activity: IActivity = {
        id,
        title,
        description,
        category,
        date,
        city,
        venue
      };

      handle_update_activity(updated_activity);
      set_selected_activity(updated_activity);
      set_edit_mode(false);
    }
  }
})(InnerForm);

export default ActivityForm;
