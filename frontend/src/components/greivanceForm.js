import { useState } from "react";
import UserDashboard from "../pages/User/userDashboard";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
import axios from "../utils/axios";
import Loading from "./Loading";
import { Textarea } from "@material-tailwind/react";

export default function GrievanceForm(props) {
  const [back, setBack] = useState(0);

  const [currentModule, setCurrentModule] = useState(false);

  useState(() => {
    axios.get("/modules/" + props.selected).then((res) => {
      setCurrentModule(res.data.data);
    });
  }, []);


  if (currentModule === false) {
    return <Loading></Loading>;
  }

  function cssToJson(css) {
    let css_json = `{"${css
      .replace(/; /g, '", "')
      .replace(/: /g, '": "')
      .replace(";", "")}"}`;

    if (css_json === '{""}') {
      return {};
    }
    return JSON.parse(css_json);
  }

  function renderField(field, properties) {
    console.log(field, properties);
    switch (properties.type) {
      case "text":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
            key={field}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <input
              className={currentModule.classes[field]?.field ?? ""}
              style={cssToJson(currentModule.css[field]?.field ?? "")}
              type={currentModule.rules[field].email ? "email" : "text"}
              defaultValue={properties.default}
              required={currentModule.rules[field].required}
              minLength={currentModule.rules[field].min ?? ""}
              maxLength={currentModule.rules[field].max ?? ""}
              name={field}
            />
          </div>
        );

      case "numeric":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <input
              className={currentModule.classes[field]?.field ?? ""}
              style={cssToJson(currentModule.css[field]?.field ?? "")}
              type={"number"}
              defaultValue={properties.default}
              required={currentModule.rules[field].required}
              min={currentModule.rules[field].min ?? ""}
              max={currentModule.rules[field].max ?? ""}
              minLength={currentModule.rules[field].digits_between?.min ?? ""}
              maxLength={currentModule.rules[field].digits_between?.max ?? ""}
              name={field}
            />
          </div>
        );

      case "textarea":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <textarea
              className={currentModule.classes[field]?.field ?? ""}
              style={cssToJson(currentModule.css[field]?.field ?? "")}
              defaultValue={properties.default}
              required={currentModule.rules[field].required}
              minLength={currentModule.rules[field].digits_between?.min ?? ""}
              maxLength={currentModule.rules[field].digits_between?.max ?? ""}
              name={field}
            />
          </div>
        );

      case "radio":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <div
              className={currentModule.classes[field]?.options_outer_div ?? ""}
              style={cssToJson(
                currentModule.css[field]?.options_outer_div ?? ""
              )}
            >
              {properties.options.map((option, index) => (
                <div
                  key={index}
                  className={currentModule.classes[field]?.option_div ?? ""}
                  style={cssToJson(currentModule.css[field]?.option_div ?? "")}
                >
                  <input
                    className={currentModule.classes[field]?.field ?? ""}
                    style={cssToJson(currentModule.css[field]?.field ?? "")}
                    required={currentModule.rules[field].required}
                    id={`${field}-${option.value}`}
                    value={option.value}
                    name={field}
                    type={"radio"}
                  />
                  <label
                    className={currentModule.classes[field]?.option_label ?? ""}
                    style={cssToJson(
                      currentModule.css[field]?.option_label ?? ""
                    )}
                    htmlFor={`${field}-${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <div
              className={currentModule.classes[field]?.options_outer_div ?? ""}
              style={cssToJson(
                currentModule.css[field]?.options_outer_div ?? ""
              )}
            >
              {properties.options.map((option, index) => (
                <div
                  key={index}
                  className={currentModule.classes[field]?.option_div ?? ""}
                  style={cssToJson(currentModule.css[field]?.option_div ?? "")}
                >
                  <input
                    className={currentModule.classes[field]?.field ?? ""}
                    style={cssToJson(currentModule.css[field]?.field ?? "")}
                    required={currentModule.rules[field].required}
                    id={`${field}-${option.value}`}
                    value={option.value}
                    name={field}
                    type={"checkbox"}
                  />
                  <label
                    className={currentModule.classes[field]?.option_label ?? ""}
                    style={cssToJson(
                      currentModule.css[field]?.option_label ?? ""
                    )}
                    htmlFor={`${field}-${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case "select":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <select
              className={currentModule.classes[field]?.field ?? ""}
              style={cssToJson(currentModule.css[field]?.field ?? "")}
              defaultValue={properties.default}
              required={currentModule.rules[field].required}
              name={field}
            >
              {properties.options.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  className={currentModule.classes[field]?.options ?? ""}
                  style={cssToJson(currentModule.css[field]?.options ?? "")}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      case "file":
        return (
          <div
            className={currentModule.classes[field]?.outer_div ?? ""}
            style={cssToJson(currentModule.css[field]?.outer_div ?? "")}
          >
            <label
              className={currentModule.classes[field]?.label ?? ""}
              style={cssToJson(currentModule.css[field]?.label ?? "")}
            >
              {properties.label}
              <span
                className={currentModule.classes[field]?.red_text ?? ""}
                style={cssToJson(currentModule.css[field]?.red_text ?? "")}
              >
                {properties.red_text ?? ""}
                {currentModule.rules[field].required ? <sup>*</sup> : ""}
              </span>
            </label>
            <input
              className={currentModule.classes[field]?.field ?? ""}
              style={cssToJson(currentModule.css[field]?.field ?? "")}
              type={"file"}
              required={currentModule.rules[field].required}
              name={field}
              accept={currentModule.rules[field].mimes ?? ""}
            />
          </div>
        );
    }
  }

  return (
    <div>
      <NavBar currentMenu="New Grievance" />

      <div class="w-full grid grid-cols-12">
        <div className="col-span-2">
          <button
            class="bg-transparent md:ml-3 md:mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              props.setSelected(false);
            }}
          >
            Back
          </button>
        </div>
        <div class="offset-2 col-span-9 flex justify-center my-2 mx-4 md:mx-0">
          <form class="w-full bg-white rounded-lg shadow-xl p-6">
            <div class="flex flex-wrap -mx-3 mb-6">
              {Object.entries(currentModule.fields).map(
                ([field, properties]) => {
                  return renderField(field, properties);
                }
              )}

              <div className={"w-full md:w-full px-3 mb-3"}>
                <label className={"block mb-1 text-sm font-bold text-black"}>
                  Enter Subject:
                  <span className="text-red-600">
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  className={
                    "appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                  }
                  type={"text"}
                  required={true}
                  name={"subject"}
                />
              </div>
              <div className={"w-full md:w-full px-3 mb-3"}>
                <label className={"block mb-1 text-sm font-bold text-black"}>
                  Enter Description:
                  <span className="text-red-600">
                    <sup>*</sup>
                  </span>
                </label>
                <Textarea
                  className={
                    "appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                  }
                  required={true}
                  name={"subject"}
                  rows={4}
                />
              </div>
              <h6>Disclaimer: </h6>
              <div className="w-full flex items-center justify-between px-3 mb-2 ">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    required={true}
                    className="mr-1 bg-white shadow"
                  />
                  <h4 className="text-sm font-bold text-red-700 pt-1">
                    I certify that the information uploaded on this application
                    is correct to the best of my Knowledge
                  </h4>
                </label>
              </div>
              <div className="w-full md:w-full px-3 mt-1 mb-1 flex items-center justify-center">
                <button
                  type="submit"
                  className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
