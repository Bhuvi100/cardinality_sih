import { useState } from "react";
import UserDashboard from "../pages/User/userDashboard";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
import axios from "../utils/axios";
import Loading from "./Loading";

export default function GrievanceForm(props) {
  const [back, setBack] = useState(0);

  const [currentModule, setCurrentModule] = useState(false);

  useState(() => {
    axios.get("/modules/3").then((res) => {
      setCurrentModule(res.data.data);
    }); //TODO CHANGE MODULE ID TO PROPS.MODULE_ID
  }, []);

  if (back === 1) {
    return <UserDashboard />;
  }

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
    console.log(css_json);
    return JSON.parse(css_json);
  }

  function renderField(field, properties) {
    switch (properties.type) {
      case "text":
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
              defaultValue={properties.default}
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
      <div className="flex flex-row">
        <SideBar />
        <div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
          <NavBar currentMenu="New Grievance" />

          <div class="grid grid-cols-6">
            <div className="col-span-1">
              <button
                class="bg-transparent md:ml-3 md:mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => {
                  setBack(1);
                }}
              >
                Back
              </button>
            </div>
            <div class="col-span-4 flex justify-center my-2 mx-4 md:mx-0">
              <form class="w-full max-w-xl bg-white rounded-lg shadow-xl p-6">
                <div class="flex flex-wrap -mx-3 mb-6">
                  {Object.entries(
                    currentModule.fields
                  ).map(([field, properties]) =>
                    renderField(field, properties)
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
