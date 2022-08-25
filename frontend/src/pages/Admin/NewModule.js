import AdminSideBar from "./AdminSidebar";
import NavBar from "../../components/Navbar";
import { useState } from "react";

export default function NewModule() {

  // const [togcss, setTogcss] = useState(false);
  // const [togclass, setTogclass] = useState(false);
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

  const [newField, setNewField] = useState("text")
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
        <div className="text-2xl text-center text-blue-500 capitalize font-bold">
          {field} Field - {id}
        </div>
        <div className="flex justify-end md:mr-3">
        <button className="md:mt-3 md:mr-3 bg-red-500 text-white font-semibold text-lg px-4 py-2 rounded-xl" onClick={() => removeField(field, id)} type={"button"}>
          Remove Field
        </button>
        </div>
        <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-3 p-6 w-4/5 justify-center bg-stone-100 rounded-xl mb-2 mt-4">
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-lg font-semibold text-black"
            htmlFor={`${field}-${id}-name`}
          >
            Enter Name of Field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2  rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-2 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            required
            name={`${field}-${id}-name`}
            id={`${field}-${id}-name`}
          />
        </div>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-lg font-semibold text-black"
            htmlFor={`${field}-${id}-label`}
          >
            Enter Label for Field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-2 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            required
            name={`${field}-${id}-label`}
            id={`${field}-${id}-label`}
          />
        </div>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-lg font-semibold text-black"
            htmlFor={`${field}-${id}-default`}
          >
            Enter Default Value of Field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-2 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            name={`${field}-${id}-default`}
            id={`${field}-${id}-default`}
          />
        </div>
        <div className="w-full md:w-full px-3 mb-2">
          <label
            className="block mb-1 text-lg font-semibold text-black"
            htmlFor={`${field}-${id}-red`}
          >
            Enter Red Text of Field:
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-2 focus:border-blue-500 leading-tight focus:outline-none"
            type="text"
            name={`${field}-${id}-red`}
            id={`${field}-${id}-red`}
          />
        </div>
        </div>
        </div>
        <br />
        {["checkbox", "radio", "select"].indexOf(field) !== -1 && (
          <div className="">
            <div className="title text-2xl text-center text-blue-500 capitalize font-bold">Options</div>
            <div className="ml-44">
            <button type={"button"} className="md:mt-3 md:mr-3 bg-blue-500 text-white font-semibold text-lg px-4 py-2 rounded-xl" onClick={() => addNewOption(field, id)}>
              Add new option
            </button>
            
            {options[field][id].map((option_id) => (
              <div key={option_id}>
                {options[field][id].length > 1 && (
                  <button
                  className="md:mt-3 md:mr-3 bg-red-500 text-white font-semibold text-lg px-4 py-2 rounded-xl"
                    type={"button"}
                    onClick={() => removeOption(field, id, option_id)}
                  >
                    Remove option
                  </button>
                )}
                <div className="w-4/5 justify-center p-3 bg-stone-100 rounded-xl mb-2 mt-4">
                <div className="text-lg font-bold mt-3 px-3 mb-2 text-blue-500 ">Option {option_id}:</div>
                <div className="flex flex-row">
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-lg font-semibold text-black"
                    htmlFor={`${field}-${id}-option-${option_id}-label`}
                  >
                    Enter label for option:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-2 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-option-${option_id}-label`}
                    id={`${field}-${id}-option-${option_id}-label`}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-lg font-semibold text-black"
                    htmlFor={`${field}-${id}-option-${option_id}-value`}
                  >
                    Enter value for option:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-2 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-option-${option_id}-value`}
                    id={`${field}-${id}-option-${option_id}-value`}
                  />
                </div>
                </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}

        {useCustomClasses && (
          <div className="">
            <div className="title text-2xl mt-5 text-center text-blue-500 capitalize font-bold">Classes</div>
            <div className="flex justify-center">
           <div className="grid grid-cols-2 gap-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mb-2 mt-4">
            {Object.entries(field_defaults[field].elements).map(
              ([element_name, classes]) => (
                <div className="">
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-lg font-semibold text-black"
                    htmlFor={`${field}-${id}-class-${element_name}`}
                  >
                    Enter classes for the {element_name}:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-class-${element_name}`}
                    id={`${field}-${id}-class-${element_name}`}
                    defaultValue={classes}
                  />
                </div>
                </div>
              )
            )}
            </div>
            </div>
          </div>
        )}

        {useCustomCSS && (
          <div>
            <div className="title text-2xl mt-5 text-center text-blue-500 capitalize font-bold">CSS</div>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mb-2 mt-4">
            {Object.entries(field_defaults[field].elements).map(
              ([element_name, classes]) => (
                <div className="w-full md:w-full px-3 mb-2">
                  <label
                    className="block mb-1 text-lg font-semibold text-black"
                    htmlFor={`${field}-${id}-css-${element_name}`}
                  >
                    Enter css for the {element_name}:
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
                    type="text"
                    required
                    name={`${field}-${id}-css-${element_name}`}
                    id={`${field}-${id}-css-${element_name}`}
                  />
                </div>
              )
            )}
            </div>
            </div>
          </div>
        )
        
        }

        <div>
          <div className="title text-2xl mt-5 text-center text-blue-500 capitalize font-bold">Rules</div>
          
          {Object.values(field_defaults[field].rules).map((rule) => {
            switch (rule) {
              case "required":
                return (
                  <div className="ml-20 mt-4">
                  <div className="w-full md:w-full px-3 mb-5">
                    <label className="block mb-1 ml-4 text-lg font-semibold text-black">
                      Please select whether it is required or optional
                    </label>
                    <div className="grid grid-cols-3 ml-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mb-2 mt-4">
                      <div className="form-check form-check-inline flex flex-row">
                        <input
                          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          name={`${field}-${id}-rule-required`}
                          id={`${field}-${id}-rule-required-yes`}
                          value="required"
                        />
                        <label
                          className="block mb-1 text-lg font-semibold text-black"
                          htmlFor={`${field}-${id}-rule-required-yes`}
                        >
                          Required
                        </label>
                      </div>
                      <div className="form-check form-check-inline flex flex-row">
                        <input
                          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          name={`${field}-${id}-rule-required`}
                          id={`${field}-${id}-rule-required-no`}
                          value="nullable"
                        />
                        <label
                          className="block mb-1 text-lg font-semibold text-black"
                          htmlFor={`${field}-${id}-rule-required-no`}
                        >
                          Optional
                        </label>
                      </div>
                    </div>
                  </div>
                  </div>
                );
              case "length":
                return (
                  <div className="grid grid-cols-2 gap-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mb-2 mt-4 ml-24">
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-lg font-semibold text-black"
                        htmlFor={`${field}-${id}-rule-length-min`}
                      >
                        Enter minimum length for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
                        type="text"
                        required
                        name={`${field}-${id}-rule-length-min`}
                        id={`${field}-${id}-rule-length-min`}
                      />
                    </div>
                    <div className="w-full md:w-full px-3 mb-2">
                      <label
                        className="block mb-1 text-lg font-semibold text-black"
                        htmlFor={`${field}-${id}-rule-length-max`}
                      >
                        Enter maximum length for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
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
                  <div className=" px-3 mb-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mt-4 ml-24">
                    <label
                      className="block mb-2 text-lg font-semibold text-black"
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
                    <div className="px-3 mb-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mt-4 ml-24">
                      <label
                        className="block mb-1 text-lg font-semibold text-black"
                        htmlFor={`${field}-${id}-rule-min`}
                      >
                        Enter minimum value for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
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
                    <div className="px-3 mb-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mt-4 ml-24">
                      <label
                        className="block mb-1 text-lg font-semibold text-black"
                        htmlFor={`${field}-${id}-rule-max`}
                      >
                        Enter maximum value for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
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
                    <div className="px-3 mb-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mt-4 ml-24">
                      <label
                        className="block mb-1 text-lg font-semibold text-black"
                        htmlFor={`${field}-${id}-rule-size`}
                      >
                        Enter file size for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
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
                    <div className="px-3 mb-3 w-4/5 justify-center p-3 bg-stone-100 rounded-xl mt-4 ml-24">
                      <label
                        className="block mb-1 text-lg font-semibold text-black"
                        htmlFor={`${field}-${id}-rule-mimes`}
                      >
                        Enter file mimes (Comma seperated) for the field:
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-normal mt-2 rounded-lg py-3 px-3 hover:bg-blue-100 focus:ring-blue-500 focus:border-3 focus:border-blue-500 leading-tight focus:outline-none"
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
      <div className="">
       
        <div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%]">
          <NavBar currentMenu="Admin Dashboard" />
          <div class="grid grid-cols-2 px-6 pt-6 2xl:container ">
          <div class="dropdown inline-block relative">
  
  <select onChange={(e) => setNewField(e.target.value)} class=" bg-gray-200 focus:border-1 text-blue-600 font-semibold text-lg px-4 py-2 rounded-xl">
    <option value="text" class="pt-1"> 
              Text Field
            </option>
    <option value="numeric" class="pt-1 rounded-xl border-0">
              Numeric Field
           </option>
           <option value="textarea" class="pt-1 rounded-xl border-0">
              Textarea Field
           </option>
           <option value="radio" class="pt-1 rounded-xl border-0">
              Radio Field
           </option>
           <option value="checkbox" class="pt-1">
              CheckBox Field
           </option>
           <option value="select" class="pt-1">
              Select Field
           </option>
           <option value="file" class="pt-1">
              File Field
           </option>
  </select>
  <button className="ml-3 hover:bg-blue-500 hover:text-white bg-white text-blue-500 border-blue-500 border-2 font-semibold text-lg px-4 py-2 rounded-xl" onClick={() => addNewField(newField)}>Add Field</button>
</div>
         <div className="flex justify-end gap-2">
            <button className={useCustomClasses == false ? "  bg-white text-blue-500 border-white border-2 font-semibold text-lg px-4 py-2 rounded-xl" : " bg-blue-500 text-white border-blue-500 border-2 font-semibold text-lg px-4 py-2 rounded-xl"} onClick={() => setUseCustomClasses(!useCustomClasses)}>
              Toggle Custom Classes
            </button>
          
            <button onClick={() => setUseCustomCSS(!useCustomCSS)} className={useCustomCSS == false ? "  bg-white text-blue-500 border-white border-2 font-semibold text-lg px-4 py-2 rounded-xl" : " bg-blue-500 text-white border-blue-500 border-2 font-semibold text-lg px-4 py-2 rounded-xl"}>
              Toggle Custom CSS
            </button>
            </div>
            </div>
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
  );
}



