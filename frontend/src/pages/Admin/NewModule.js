import AdminSideBar from "./AdminSidebar";
import NavBar from "../../components/Navbar";
import { useState } from "react";

export default function NewModule() {
  const field_defaults = {
    text: {
      rules: ["required", "length", "email"],
      elements: {
        outer_div: "w-full md:w-full px-3 mb-3",
        label: "block mb-1 text-sm font-bold text-black",
        field:
          "appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none",
        red_text: "text-red-600",
      },
    },
    numeric: {
      rules: ["required", "min", "max", "length"],
      elements: {
        outer_div: "w-full md:w-full px-3 mb-3",
        label: "block mb-1 text-sm font-bold text-black",
        field:
          "appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none",
        red_text: "text-red-600",
      },
    },
    textarea: {
      rules: ["required", "length"],
      elements: {
        outer_div: "w-full md:w-full px-3 mb-3",
        label: "block mb-2 text-sm font-bold text-black",
        field:
          "block p-2.5 w-full text-sm text-gray-500 rounded-lg border border-black focus:ring-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-600 focus:outline-none",
        red_text: "text-red-600",
      },
    },
    radio: {
      rules: ["required"],
      elements: {
        outer_div: "w-full md:w-full px-3 mb-3",
        label: "block mb-2 text-sm font-bold text-black",
        options_outer_div: "grid grid-cols-3 ml-3",
        option_div: "form-check form-check-inline flex flex-row",
        field:
          "form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
        option_label: "form-check-label inline-block text-gray-800",
        red_text: "text-red-600",
      },
    },
    checkbox: {
      rules: ["required"],
      elements: {
        outer_div: "w-full md:w-full px-3 mb-3",
        label: "block mb-2 text-sm font-bold text-black",
        options_outer_div: "grid grid-cols-3 ml-3",
        option_div: "form-check form-check-inline flex flex-row",
        field:
          "form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
        option_label: "form-check-label inline-block text-gray-800",
        red_text: "text-red-600",
      },
    },
    select: {
      rules: ["required"],
      elements: {
        outer_div: "w-full md:w-full mt-3 px-3 mb-6",
        label: "block mb-2 text-sm font-bold text-black",
        field:
          "text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black",
        options: "",
        red_text: "text-red-600",
      },
    },
    file: {
      rules: ["required", "size", "mimes"],
      elements: {
        outer_div: "w-full md:w-full px-3 mb-3",
        label: "block mb-2 text-sm font-medium text-black",
        field:
          "block mb-5 w-full text-xs text-gray-900 rounded-lg border border-blue-800 cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400",
        red_text: "text-red-600",
      },
    },
  };

  const [fields, setFields] = useState({});

  const [options, setOptions] = useState({
    radio: [],
    checkbox: [],
    select: [],
  });

  const [useCustomClasses, setUseCustomClasses] = useState(true);
  const [useCustomCSS, setUseCustomCSS] = useState(true);

  function addNewField(field) {
    let current_fields = { ...fields };

    let new_id =
      Object.keys(current_fields).length === 0
        ? 1
        : parseInt(
            Object.keys(current_fields)[Object.keys(current_fields).length - 1]
          ) + 1;
    current_fields[new_id] = field;

    setFields(current_fields);

    if (["checkbox", "radio", "select"].indexOf(field) !== -1) {
      let current_options = Object.assign({}, options);
      if (current_options[field][new_id] !== undefined) {
        current_options[field][new_id].push(
          current_options[field][new_id][
            current_options[field][new_id].length - 1
          ] + 1
        );
      } else {
        current_options[field][new_id] = [1];
      }
      setOptions(current_options);
    }
  }

  function removeField(field, id) {
    let current_fields = Object.assign({}, fields);
    delete current_fields[id];
    setFields(current_fields);

    if (["checkbox", "radio", "select"].indexOf(field) !== -1) {
      let current_options = Object.assign({}, options);
      delete current_options[field][id];
      setOptions(current_options);
    }
  }

  function addNewOption(field, id) {
    let current_options = Object.assign({}, options);

    current_options[field][id].push(
      current_options[field][id][current_options[field][id].length - 1] + 1
    );
    setOptions(current_options);
  }

  function removeOption(field, id, option_id) {
    let current_options = Object.assign({}, options);
    current_options[field][id].splice(
      current_options[field][id].indexOf(option_id)
    );
    setOptions(current_options);
  }

  function renderField(field, id) {
    return (
      <div key={id} className="mb-4">
        <h4>
          {field} Field - {id}
        </h4>
        <button onClick={() => removeField(field, id)} type={"button"}>
          Remove Field
        </button>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-sm font-bold text-black"
            htmlFor={`${field}-${id}-name`}
          >
            Enter name of the field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            required
            name={`${field}-${id}-name`}
            id={`${field}-${id}-name`}
          />
        </div>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-sm font-bold text-black"
            htmlFor={`${field}-${id}-label`}
          >
            Enter label for the field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            required
            name={`${field}-${id}-label`}
            id={`${field}-${id}-label`}
          />
        </div>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-sm font-bold text-black"
            htmlFor={`${field}-${id}-default`}
          >
            Enter default value of the field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            name={`${field}-${id}-default`}
            id={`${field}-${id}-default`}
          />
        </div>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-sm font-bold text-black"
            htmlFor={`${field}-${id}-red`}
          >
            Enter Red text of the field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            name={`${field}-${id}-red`}
            id={`${field}-${id}-red`}
          />
        </div>
        <br />
        {["checkbox", "radio", "select"].indexOf(field) !== -1 && (
          <div>
            <h5>Options</h5>
            <button type={"button"} onClick={() => addNewOption(field, id)}>
              Add new option
            </button>
            {options[field][id].map((option_id) => (
              <div key={option_id}>
                {options[field][id].length > 1 && (
                  <button
                    type={"button"}
                    onClick={() => removeOption(field, id, option_id)}
                  >
                    Remove option
                  </button>
                )}
                <h6>Option {option_id}:</h6>
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-sm font-bold text-black"
                    htmlFor={`${field}-${id}-option-${option_id}-label`}
                  >
                    Enter label for the option:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-option-${option_id}-label`}
                    id={`${field}-${id}-option-${option_id}-label`}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-sm font-bold text-black"
                    htmlFor={`${field}-${id}-option-${option_id}-value`}
                  >
                    Enter value for the option:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-option-${option_id}-value`}
                    id={`${field}-${id}-option-${option_id}-value`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {useCustomClasses && (
          <div>
            <h5>Classes:</h5>
            {Object.entries(field_defaults[field].elements).map(
              ([element_name, classes]) => (
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-sm font-bold text-black"
                    htmlFor={`${field}-${id}-class-${element_name}`}
                  >
                    Enter classes for the {element_name}:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-class-${element_name}`}
                    id={`${field}-${id}-class-${element_name}`}
                    defaultValue={classes}
                  />
                </div>
              )
            )}
          </div>
        )}

        {useCustomCSS && (
          <div>
            <h5>CSS:</h5>
            {Object.entries(field_defaults[field].elements).map(
              ([element_name, classes]) => (
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-sm font-bold text-black"
                    htmlFor={`${field}-${id}-css-${element_name}`}
                  >
                    Enter css for the {element_name}:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-css-${element_name}`}
                    id={`${field}-${id}-css-${element_name}`}
                  />
                </div>
              )
            )}
          </div>
        )}

        <div>
          <h5>Rules</h5>
          {Object.values(field_defaults[field].rules).map((rule) => {
            switch (rule) {
              case "required":
                return (
                  <div className="w-full md:w-full px-3 mb-3">
                    <label className="block mb-2 text-sm font-bold text-black">
                      Please select whether it is required or optional
                    </label>
                    <div className="grid grid-cols-3 ml-3">
                      <div className="form-check form-check-inline flex flex-row">
                        <input
                          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          name={`${field}-${id}-rule-required`}
                          id={`${field}-${id}-rule-required-yes`}
                          value="required"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor={`${field}-${id}-rule-required-yes`}
                        >
                          Required
                        </label>
                      </div>
                      <div className="form-check form-check-inline flex flex-row">
                        <input
                          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          name={`${field}-${id}-rule-required`}
                          id={`${field}-${id}-rule-required-no`}
                          value="nullable"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor={`${field}-${id}-rule-required-no`}
                        >
                          Optional
                        </label>
                      </div>
                    </div>
                  </div>
                );
              case "length":
                return (
                  <div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-sm font-bold text-black"
                        htmlFor={`${field}-${id}-rule-length-min`}
                      >
                        Enter minimum length for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        required
                        name={`${field}-${id}-rule-length-min`}
                        id={`${field}-${id}-rule-length-min`}
                      />
                    </div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-sm font-bold text-black"
                        htmlFor={`${field}-${id}-rule-length-max`}
                      >
                        Enter maximum length for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        required
                        name={`${field}-${id}-rule-length-max`}
                        id={`${field}-${id}-rule-length-max`}
                      />
                    </div>
                  </div>
                );
              case "email":
                return (
                  <div className="w-full md:w-full px-3 mb-3">
                    <label
                      className="block mb-2 text-sm font-bold text-black"
                      htmlFor={`${field}-${id}-rule-email`}
                    >
                      Email validation for the field:
                    </label>
                    <div className="grid grid-cols-3 ml-3">
                      <div className="form-check form-check-inline flex flex-row">
                        <input
                          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          name={`${field}-${id}-rule-email`}
                          id={`${field}-${id}-rule-email-yes`}
                          value="1"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor={`${field}-${id}-rule-email-yes`}
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline flex flex-row">
                        <input
                          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          name={`${field}-${id}-rule-email`}
                          id={`${field}-${id}-rule-email-no`}
                          value="0"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor={`${field}-${id}-rule-email-no`}
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                );

              case "min":
                return (
                  <div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-sm font-bold text-black"
                        htmlFor={`${field}-${id}-rule-min`}
                      >
                        Enter minimum value for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        name={`${field}-${id}-rule-min`}
                        id={`${field}-${id}-rule-min`}
                      />
                    </div>
                  </div>
                );
              case "max":
                return (
                  <div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-sm font-bold text-black"
                        htmlFor={`${field}-${id}-rule-max`}
                      >
                        Enter maximum value for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        name={`${field}-${id}-rule-max`}
                        id={`${field}-${id}-rule-max`}
                      />
                    </div>
                  </div>
                );
              case "size":
                return (
                  <div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-sm font-bold text-black"
                        htmlFor={`${field}-${id}-rule-size`}
                      >
                        Enter file size for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        name={`${field}-${id}-rule-size`}
                        id={`${field}-${id}-rule-size`}
                      />
                    </div>
                  </div>
                );

              case "mimes":
                return (
                  <div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-sm font-bold text-black"
                        htmlFor={`${field}-${id}-rule-mimes`}
                      >
                        Enter file mimes (Comma seperated) for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        name={`${field}-${id}-rule-mimes`}
                        id={`${field}-${id}-rule-mimes`}
                      />
                    </div>
                  </div>
                );
            }
          })}
        </div>
        <br />
        <br />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-row">
        <AdminSideBar />
        <div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
          <NavBar currentMenu="Admin Dashboard" />
          <div class="px-6 pt-6 2xl:container">
            <button onClick={() => addNewField("text")}>
              Add new Text Field
            </button>
            <br />
            <button onClick={() => addNewField("numeric")}>
              Add new Numeric Field
            </button>
            <br />
            <button onClick={() => addNewField("textarea")}>
              Add new Textarea Field
            </button>
            <br />
            <button onClick={() => addNewField("radio")}>
              Add new Radio Field
            </button>
            <br />
            <button onClick={() => addNewField("checkbox")}>
              Add new Checkbox Field
            </button>
            <br />
            <button onClick={() => addNewField("select")}>
              Add new Select Field
            </button>
            <br />
            <button onClick={() => addNewField("file")}>
              Add new File Field
            </button>
            <br />
            <button onClick={() => setUseCustomClasses(!useCustomClasses)}>
              Toggle Custom Classes
            </button>
            <br />
            <button onClick={() => setUseCustomCSS(!useCustomCSS)}>
              Toggle Custom CSS
            </button>
            <br />
            <br />
            <form>
              {Object.entries(fields).map(([id, field]) =>
                renderField(field, id)
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
